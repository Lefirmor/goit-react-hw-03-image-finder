import { LineWave } from 'react-loader-spinner';
import { LoaderIcon } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderIcon>
      <LineWave
        height="200"
        width="200"
        color="#blue"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </LoaderIcon>
  );
};
