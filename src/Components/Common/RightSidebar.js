import React, { useEffect, useState } from 'react';

//redux
import {
    changeSidebarTheme,
    // resetValue
} from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const RightSidebar = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    function tog_show() {
        setShow(!show)
        dispatch(changeSidebarTheme("gradient"));
    }

    useEffect(() => {
        if (show && document.getElementById("sidebar-color-dark") && document.getElementById("sidebar-color-light")) {
            document.getElementById("sidebar-color-dark").checked = false;
            document.getElementById("sidebar-color-light").checked = false;
        }
    })

    const {
        preloader
    } = useSelector(state => ({
        layoutType: state.Layout.layoutType,
        leftSidebarType: state.Layout.leftSidebarType,
        layoutModeType: state.Layout.layoutModeType,
        layoutWidthType: state.Layout.layoutWidthType,
        layoutPositionType: state.Layout.layoutPositionType,
        topbarThemeType: state.Layout.topbarThemeType,
        leftsidbarSizeType: state.Layout.leftsidbarSizeType,
        leftSidebarViewType: state.Layout.leftSidebarViewType,
        leftSidebarImageType: state.Layout.leftSidebarImageType,
        preloader: state.Layout.preloader
    }));

  
    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const pathName = window.location.pathname;

    useEffect(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            document.getElementById("preloader").style.opacity = "1";
            document.getElementById("preloader").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("preloader").style.opacity = "0";
                document.getElementById("preloader").style.visibility = "hidden";
            }, 1000);
        }
    }, [preloader, pathName]);

    return (
        <React.Fragment>
            <button
                onClick={() => toTop()}
                className="btn btn-danger btn-icon" id="back-to-top">
                <i className="ri-arrow-up-line"></i>
            </button>

            {preloader === "enable" && <div id="preloader">
                <div id="status">
                    <div className="spinner-border text-primary avatar-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    );
};

export default RightSidebar;