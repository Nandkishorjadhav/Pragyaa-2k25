import { Routes, Route } from 'react-router-dom'; 
import Exhibition from './Exhibition';
import DetailExhibition from './DetailExhibition';

const ExhibitionSection = () => {
    return (
        <Routes>
            <Route path="/" element={<Exhibition />} />
            <Route path="/detail/:title" element={<DetailExhibition />} />
        </Routes>
    );
}

export default ExhibitionSection;