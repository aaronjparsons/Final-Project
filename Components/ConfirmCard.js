import React from 'react';
import { View } from 'react-native';
import { PricingCard } from 'react-native-elements';

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <PricingCard
          color='#4f9deb'
          price='Confirm?'
          info={[`$${this.props.info.price}/hour`, '12345 98 Ave']}
          button={{ title: 'Confirm Parking' }}
          onButtonPress={this.props.buttonPressed}
        />
      </View>
    );
  }
}

export default InfoCard;