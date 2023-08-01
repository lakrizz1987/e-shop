import Main from '../Main/Main';

import { useLocation } from 'react-router-dom';

const AllProducts = () => {
    const location = useLocation();
    const search = location.search.slice(1)

    return (
        <Main category='All' search={search} />
    )
}

export default AllProducts;