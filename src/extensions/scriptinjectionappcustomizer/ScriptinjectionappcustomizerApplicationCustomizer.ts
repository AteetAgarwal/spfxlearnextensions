import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
//import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'ScriptinjectionappcustomizerApplicationCustomizerStrings';

const LOG_SOURCE: string = 'ScriptinjectionappcustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IScriptinjectionappcustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ScriptinjectionappcustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<IScriptinjectionappcustomizerApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }
    //Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
      /* handle error */
    //});
    let cssFileUrl:string="/Shared%20Documents/scripts/css/scriptinjection.css";
    let jsFileUrl:string="/Shared%20Documents/scripts/js/scriptinjection.js";
    let jqueryFileUrl:string="/Shared%20Documents/scripts/js/jquery.js";

    let head:any=document.getElementsByTagName("head");
    if(cssFileUrl)
    {
      let linkTag:HTMLLinkElement=document.createElement("link");
      linkTag.href=cssFileUrl;
      linkTag.type="text/css";
      linkTag.rel="stylesheet";
      head[0].insertAdjacentElement("beforeEnd", linkTag);
    }
    let jqueryRef:HTMLScriptElement=document.createElement("script");
    jqueryRef.src=jqueryFileUrl;
    jqueryRef.type="text/javascript";
    head[0].appendChild(jqueryRef);

    let jsRef:HTMLScriptElement=document.createElement("script");
    jsRef.src=jsFileUrl;
    jsRef.type="text/javascript";
    head[0].appendChild(jsRef);
    return Promise.resolve();
  }
}
