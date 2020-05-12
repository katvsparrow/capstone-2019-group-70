import React from 'react';

//import WillView from "components/Media/WillView.jsx";

import {
    Card, 
    CardHeader, 
    CardBody,
    Col,
    Container,
    Row, 
    Table,
    Button 
} from 'reactstrap';



const TagCard = (tags) => {
    return (
        <Card className="w-100">
            <CardHeader className="text-center">Associated Tags</CardHeader>
            <CardBody>
                {/* Generate tages */}
                <a href="/#" className="badge badge-primary p-3 mx-1">1429</a>
                <a href="/#" className="badge badge-warning p-3 mx-1">Spanish</a>
                <a href="/#" className="badge badge-secondry p-3 mx-1">Spanish</a>
            </CardBody>
        </Card>
    );
};

const ActionButtons = () => {
    return (
        <div className='action-buttons'>
            <Button>
                <i class="far fa-heart fa-2x"></i>
            </Button>
            <Button>
                <i class="far fa-image fa-2x"></i>
            </Button>
            <Button>
                <i class="fas fa-eye fa-2x"></i>
            </Button>
            <Button>
                <i class="fas fa-flag fa-2x"></i>
            </Button>
        </div>
    );
}

const DetailTable = (details) => {
    return (
        <Table borderless>
            <tr>
                <td>Publication date</td>
                <td>8 July 1429</td>
            </tr>
            <tr>
                <td>Location Origin</td>
                <td>Candia, Crete</td>
            </tr>
            <tr>
                <td>Archive / Library</td>
                <td>Archivio di Stato, Venice</td>
            </tr>
            <tr>
                <td>Source Reference</td>
                <td>Notai di Candia, b. 115, testaments, f. 118 (See Arbel, “Le Donne…”)</td>
            </tr>
        </Table>
    );
};

class WillExample extends React.Component {
    render() {
        return (
            <>
                <main href="main">
                    <div className="position-relative">
                        <section className="section bg-dark text-white pb-3 mb-3" />
                        <section>
                            <Container>
                                <Row className="mt-2 mb-2 border-bottom">
                                    <h3>Regina, Wife of Bondia Coras (or Cresques?): Puigcerdá 1306</h3>
                                </Row>
                                <Row className="mt-4">
                                    <Col className="mr-1" lg="7">
                                        {/* Original Text */}
                                        <Row>
                                            <h4>Original Text</h4>
                                        </Row>
                                        <Row className="bg-secondary p-4 mb-3 transcript-container h-50">
                                            <p>
                                            Regina uxor Bondia Coras Iudei condam, licet sim infirma etc., meum facio et condo testamentum de bonis meis, ordinando etc. [deleted: in quo constituo]. In primis iubeo corpus meum sepeliri.
                                            <br />
                                            <br />
                                            Et iubeo dari Iuceff Choen C solidos, quos ei lego. Item dimitto Isaach de Soall XXX solidos. Item heredibus Iuceff de Soall, Iudei condam, XXX solidos. Item XX solidos Momete Iudeo. Item dimitto Mancose uxori Abrahe de la Rotxela Iudei condam, C solidos. [Deleted: Et volo iubeo quod secratarii].
                                            <br />
                                            <br />
                                            Item dimitto Aster sorori dicte Mancose L solidos. Item iubeo fieri quandam caritatem pro anima mea, die obitus mei, cui faciendo assigno et dimitto C solidos.
                                            <br />
                                            <br />
                                            Item dimitto Aster [deleted: uxori] filee mee, uxorique Fagim Bonet Iudei, pro parte et hereditate ei pertinentibus et pertinere debentibus in bonis meis C solidos barchinonenses; in quibus, et in illa dote quam habuit tempore nupciarum eius et dicti viri sui, ipsam heredem mihi instituo, et nisi aliud etc.
                                            <br />
                                            <br />
                                            Item dimitto Gaux, filie mee et dicti viri mei condam, pro parte et iure ei pertinentibus in bonis meis, C [solidos]; in quibus, et in illa dote quam habuit tempore nupciarum eius et Astruch Iuceff viri eius, ipsam mihi heredem instituo, et nisi aliud etc.
                                            <br />
                                            <br />
                                            Item dimitto elemosine Iudeorum Podiiceritani, amore dei pro anima mea, quendam lectum meum cum omnibus suis pannis et preparamentis, qui stet in scola Iudeorum predictorum. Et constituo manumissorem meum et exsecutorem huius mei testamenti Astruch Iuceff Iudeum pro[1] cui dono licenciam etc.
                                            <br />
                                            <br />
                                            In residuis aliis bonis meis, ubicumque sint et quecumque, Bondia et Iuceff neptes meos filiosque Astruch Bondia Iudei condam mihi heredes universales instituo. Hanc autem etc.
                                            <br />
                                            <br />
                                            Testes: Matheus de Oliana, Arnaldus Payleres, Raimundus Rahedor, Astruch de Besalu, Iacob Abrahe Choen, Bernardus Duran, Iuceff Abrahe, et Vitalis filius Astruch Crexent.
                                            <br />
                                            <br />
                                            Debet V solidos Astruch Iuceff.
                                            </p>
                                        </Row>
                                        {/* Translated Text */}
                                        <Row>
                                            <h4>Translated Text</h4>
                                        </Row>
                                    </Col>
                                    <Col className="ml-5" lg="4">
                                        {/* Action buttons */ }
                                        <Row className="action-buttons">
                                            <ActionButtons />
                                        </Row>
                                        {/* Document Tags */}
                                        <Row className="mt-3">
                                            <TagCard />
                                        </Row>
                                        {/* Document Details */}
                                        <Row className="mt-3">
                                            <DetailTable />
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </div>
                </main>
            </>
        );
    }
}


export default WillExample;