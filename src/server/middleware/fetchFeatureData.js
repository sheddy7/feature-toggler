
import featureData from '../featureData.json';

const fetchFeatureData = (req, res, next) => {

  res.send(featureData)
};

export default fetchFeatureData;
