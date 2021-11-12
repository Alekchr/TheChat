import Metrics from './Metrics';

export const size = {
    font6: Metrics.windowWidth * (6/365),
    font8: Metrics.windowWidth * (8/365),
    font10: Metrics.windowWidth * (10/365),
    font12: Metrics.windowWidth * (12/365),
    font14: Metrics.windowWidth * (14/365),
    font16: Metrics.windowWidth * (16/365),
    font20: Metrics.windowWidth * (20/365),

};

export const weight = {
    full: '900',
    semi: '600',
    low: '400',
    bold: 'bold',
    normal: 'normal'
};

export const type = {
montserratRegular: 'Montserrat-Regular',
};

export default {
    size,
    weight,
    type,
}