
import featureData from '../featureData.json';
import { FEATURES_DETAILS, OVERALL_FEATURE_STATUS, CLIENT_FEATURE_STATUS } from '../constants';

const getClientFeatureData = (client) => {

  const featureDetails = featureData[FEATURES_DETAILS];
  const clientOverides = featureData[CLIENT_FEATURE_STATUS][client];

  const clientFeatureStatus = clientOverides ? 
    {
      ...featureData[OVERALL_FEATURE_STATUS],
      ...clientOverides
    } : 
    featureData[OVERALL_FEATURE_STATUS];

  return featureDetails.map(feature => ({
    ...feature,
    enabled: clientFeatureStatus[feature.id]
  }));
};

const fetchFeatureData = (req, res) => {

  const { client } = req.query;
  
  const response = client ? getClientFeatureData(client) : featureData; 

  res.send(response);
};

export default fetchFeatureData;
