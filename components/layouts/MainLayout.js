import React, {useMemo} from 'react';
import CustomHeader from '../baseComponents/gui/customHeader/CustomHeader';
import Footer from '../baseComponents/gui/footer/Footer';
import {header} from "../../constants/copyright";
import {node} from "prop-types";
import ModalProvider from "../baseComponents/controllers/modalController/ModalProvider";
import Preloader from "../baseComponents/gui/preloader/Preloader";

export default function MainLayout({children}) {
  return (
    <ModalProvider
      aliases={useMemo(() => ({
        // infoModal: {Modal: InfoModal, props: {message: "Lorem ipsum"}}
      }), [])}
    >
      <Preloader/>
      <input type={"checkbox"} className={"custom-header__input"} id={"menu-burger"}/>
      <div className={'main-container'}>
        <CustomHeader {...header}/>
        <div className={'content-wrapper'}>{children}</div>
        <Footer/>
      </div>
    </ModalProvider>
  )
}

MainLayout.propTypes = {
  children: node,
};
