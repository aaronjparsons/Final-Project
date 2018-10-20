import React from 'react';
import { View } from 'react-native';
import { PricingCard, Button } from 'react-native-elements';

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <PricingCard
          color='#4f9deb'
          price={`$${this.props.info.price}/hour`}
          info={['Plug Available', '12345 98 Ave']}
          button={{ title: 'PARK HERE' }}
          onButtonPress={this.props.buttonPressed}
        />
      </View>
    );
  }
}

export default InfoCard;