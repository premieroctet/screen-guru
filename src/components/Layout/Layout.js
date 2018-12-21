import React from 'react';
import { connect } from 'react-redux';
import SizeMe from 'react-sizeme';
import Confetti from 'react-confetti';
import { ScreenWrapper, ScreenInner } from './elements';
import Footer from '../Footer';
import Header from '../Header';

const Layout = props => (
  <ScreenWrapper>
    <ScreenInner>
      <Header isLoading={props.isLoading} isReady={props.isReady} hasError={props.hasError} />

      {props.isReady && (
        <Confetti
          run={props.isReady}
          recycle={false}
          width={props.size.width}
          height={props.size.height}
          colors={['#1050ff']}
        />
      )}

      {props.children}
    </ScreenInner>
    <Footer />
  </ScreenWrapper>
);

const mapState = state => ({
  isReady: state.app.isReady,
  isLoading: state.app.isLoading,
  hasError: state.app.url,
});

const LayoutContainer = connect(mapState)(Layout);

export default SizeMe({ monitorHeight: true })(LayoutContainer);
