import { useAsset } from '@livepeer/react';
 
function SomeComponent() {
  const asset = useAsset({ assetId: 'd8e8b87d-6774-4083-a2d7-4e85872d18cd' });
 
  return <div>Asset: {asset.name}</div>;
}