import React from 'react';
import CollectorsMain from "../components/clientsComponents/CollectorsMain.jsx";
import CollectorsQualities from "../components/clientsComponents/CollectorsQualities.jsx";
import CollectorsLaws from "../components/clientsComponents/CollectorsLaws.jsx";

const CollectorsPage = () => {


    return (
        <>
            <CollectorsMain/>
            <CollectorsQualities/>
            <CollectorsLaws/>
        </>

    );
};

export default CollectorsPage;
