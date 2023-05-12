import { Log } from '@microsoft/sp-core-library';
import * as React from 'react';

import styles from './Fieldcustomizerextension.module.scss';

export interface IFieldcustomizerextensionProps {
  text: string;
  width:string;
}

const LOG_SOURCE: string = 'Fieldcustomizerextension';

export default class Fieldcustomizerextension extends React.Component<IFieldcustomizerextensionProps, {}> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: Fieldcustomizerextension mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: Fieldcustomizerextension unmounted');
  }

  public render(): React.ReactElement<{}> {
    const genderStyles:any=  {
      genderCommon: styles.fieldcustomizerextension,
      genderSpecific: {"background-color":"orange"}
    } ;
    if(this.props.text.toLocaleLowerCase()=="female"){
      genderStyles.genderSpecific['background-color']="pink";
    }
    return (
      <div className={genderStyles.genderCommon}>
        <div style={genderStyles.genderSpecific}>
          { this.props.text }
        </div>
      </div>
    );
  }
}
