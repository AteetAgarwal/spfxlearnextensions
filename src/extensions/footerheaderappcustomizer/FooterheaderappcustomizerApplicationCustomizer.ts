//import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderName
} from '@microsoft/sp-application-base';
//import { Dialog } from '@microsoft/sp-dialog';

//import * as strings from 'FooterheaderappcustomizerApplicationCustomizerStrings';

//const LOG_SOURCE: string = 'FooterheaderappcustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IFooterheaderappcustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class FooterheaderappcustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<IFooterheaderappcustomizerApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    this.context.placeholderProvider.changedEvent.add(this, this.CustomHeader);
    return Promise.resolve();
  }

  public CustomHeader(){
    this.context.placeholderProvider.placeholderNames.map((placeholderName)=>{
      //console.log(placeholderName);
      //console.log(this.context.placeholderProvider.placeholderNames);
      //console.log(PlaceholderName[placeholderName]);
    });
    this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top).domElement.innerHTML="<div style='background-color:coral;height:50px'>Custom Top Header</div>";
    this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom).domElement.innerHTML="<div style='background-color:aqua;height:50px'>Custom Footer</div>";
  }
}
