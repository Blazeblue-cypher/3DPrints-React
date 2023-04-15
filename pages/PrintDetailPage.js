import {Container, Row} from 'reactstrap';
import {useParams} from 'react-router-dom'
import { selectPrintById } from '../features/prints/printsSlice';
import PrintDetail from '../features/prints/PrintDetail';
import CommentsList from '../features/comments/CommentsList'
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux';

const PrintDetailPage = () => {
    const {printId} = useParams();
    const print = useSelector(selectPrintById(printId));
    console.log('print:', print);

    return (
        <Container>
            <SubHeader current={print.name} detail={true}/>
            <Row>
                <PrintDetail print={print}/>
                <CommentsList printId={printId} />
            </Row>
        </Container>
    );

};

export default PrintDetailPage;