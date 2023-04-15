import { Container } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader';
const LinksPage= () => {
    return (
        <Container>
            <SubHeader current='Link' />
            <DisplayList />
        </Container>
    );
};

export default LinksPage;