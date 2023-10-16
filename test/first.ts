import {remote, type RemoteOptions} from 'webdriverio';
import {startConfig} from './config'


const capabilities: RemoteOptions["capabilities"]  = {
  "platformName": "Android",
  "appium:platformVersion": "10.0",
  "appium:automationName": "UiAutomator2",
  "appium:noReset": true,
  "appium:app": 'E:\ying.apk',
} ;

const wdOpts: RemoteOptions = {
  hostname:'127.0.0.1',
  port:  4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts as any);
  console.log('------------------------ 会执行吗？')

  await driver.startActivity(startConfig.bili.appPackage, startConfig.bili.appActivity)


  const searchElement = await driver.$('//android.widget.LinearLayout[@resource-id="tv.danmaku.bili:id/expand_search"]');
  const youLiveElement = await searchElement.$('//android.widget.TextView[@resource-id="tv.danmaku.bili:id/search_text"]');


  // 猜你要搜索的
  const youLiveContent = await youLiveElement.getText();
  console.log('------- youLiveContent: ', youLiveContent);


  const myElement = await driver.$('//android.widget.FrameLayout[@content-desc="我的,5之5,标签"]');
  await myElement.click();

}

runTest().catch(console.error);