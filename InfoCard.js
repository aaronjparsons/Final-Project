import React from 'react';
import { PricingCard } from 'react-native-elements';

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PricingCard
        color='#4f9deb'
        price='$1.25/hour'
        info={['Plug available', '12345 12 Street']}
        button={{ title: 'PARK HERE' }}
      />
    );
  }
}

export default InfoCard;