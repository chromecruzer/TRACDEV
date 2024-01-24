import {TabsBar} from "./TabsBar";
import * as React from 'react';
import {Notification} from "../components/Notification";
import {Login} from "./Login";
import {UseLoginUser} from "./UseLoginUser";
import {AppHeader} from "./AppHeader";

export const Layout = ({children}) => {
  const {appUser} = UseLoginUser();

  const main = <><Notification/>
    <div className="grid grid-flow-col md:grid-col-8 gap-10">
      <TabsBar/>
      <div className="md:col-span-7">
        {children}
      </div>
    </div>
  </>;

  return <div className="grid grid-flow-row">
    <AppHeader/>
    {appUser ? main : <Login/>}
  </div>
}
