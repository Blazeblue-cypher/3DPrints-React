import { Container } from 'reactstrap';
import PrintsList from '../features/prints/PrintsList';
import SubHeader from '../components/SubHeader';

const PrintsDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <PrintsList />
        </Container>
    );
};

export default PrintsDirectoryPage;