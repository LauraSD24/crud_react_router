import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from '../Components/main/Main';
import AddFruit from '../Components/addFruit/AddFruit';
import UpdateFruit from '../Components/updateFruit/UpdateFruit';
import NotFound from '../Components/notFound/NotFound';

function ComponentRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/add" element={<AddFruit/>}></Route>
            <Route path="/update/:code" element={<UpdateFruit/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default ComponentRoutes;