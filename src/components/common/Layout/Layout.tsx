import React from 'react';
import Footer from '../Footer/Footer';
import Toolbar from '../Toolbar/Toolbar';
import Loader from '../Loader/Loader';
import Backdrop from '../Backdrop/Backdrop';
// import './Layout.scss';

const Layout = (
    isFetching: boolean
    // children: Array<string>
) => (
    <div className="layout">
        <Toolbar
            isFetching={isFetching}
            className="toolbar--sticky"

        />

        <div className="layout__content">
            {/*{children}*/}
            {
                isFetching &&
                    <>
                        <Backdrop/>
                        <Loader type="orange" />
                    </>
            }
        </div>
        <Footer/>
    </div>
);
//
// Layout.propTypes = {
//     search: PT.string.isRequired,
//     isFetching: PT.bool.isRequired,
//     onChangeInput: PT.func.isRequired,
//     searchMovies: PT.func.isRequired,
//     children: PT.oneOfType([
//         PT.object,
//         PT.arrayOf(PT.object)
//     ]).isRequired
// };

export default Layout;
