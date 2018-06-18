
import featureData from '../featureData.json';
import { FEATURES_DETAILS, OVERALL_FEATURE_STATUS, CLIENT_FEATURE_STATUS } from '../constants';

const getFeatureDetails = (client = null) => {

  const featureDetails = featureData[FEATURES_DETAILS];
  const clientOverides = client ? featureData[CLIENT_FEATURE_STATUS][client] : null;

  const clientFeatureStatus = clientOverides ? 
    {
      ...featureData[OVERALL_FEATURE_STATUS],
      ...clientOverides
    } : 
    featureData[OVERALL_FEATURE_STATUS];

  const featureDetailsWithStatus = featureDetails.map(feature => ({
    ...feature,
    enabled: clientFeatureStatus[feature.id]
  }));

  return client ? featureDetailsWithStatus :
    {
      overall: featureDetailsWithStatus,
      clients: featureData[CLIENT_FEATURE_STATUS]
    };
};

const fetchFeatureData = (req, res) => {

  const { client } = req.query;
  
  const response = getFeatureDetails(client);

  res.send(response);
};

export default fetchFeatureData;
