import { Dimensions } from 'react-native';

const{width, height} = Dimensions.get('window')
console.log(width +' ' + height)

const metrics = {
    windowWidth: width < height ? width : height,
    windowHeight: width < height ? height : width,
};
console.log(metrics.windowWidth +' ' + metrics.windowHeight)
export default metrics;