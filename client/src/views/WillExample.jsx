import React from 'react';

import WillView from "components/Media/WillView.jsx";

import {
    Container,
    Row, 
    Table 
} from 'reactstrap';

const ExampleData = (props) => {
  return (
    <Table borderless>
      <tbody>
      <tr>
          <th scope="row">Author</th>
          <td>Regina</td>
        </tr>
        <tr>
          <th scope="row">Date of Publication</th>
          <td>23 October 1306</td>
        </tr>
        <tr>
          <th scope="row">Location of Publication</th>
          <td>Puigcerdà, Spain: Arxiu Històric Comarcal de Puigcerdà</td>
        </tr>
        <tr>
          <th scope="row">Original Language</th>
          <td>Latin</td>
        </tr>
        <tr>
          <th scope="row">Upload Date</th>
          <td>16 Februrary 2020</td>
        </tr>
        <tr>
          <th scope="row">Original Submitter</th>
          <td>Rena Lauer</td>
        </tr>
      </tbody>
    </Table>
  );
}

class WillExample extends React.Component {
    render() {
        return (
            <>
                <main href="main">
                    <div className="position-relative">
                        <section className="section section-lg bg-dark text-white">
                            <Container>
                                <Row>
                                    <h3 className="text-white">Regina, Wife of Bondia Coras (or Cresques?): Puigcerdá 1306</h3>
                                </Row>
                                <Row>
                                    <WillView />
                                </Row>
                            </Container>
                        </section>
                        <section className="section">
                            <Container>
                                <Row>
                                    <h2>Document Details</h2>
                                </Row>
                                <Row className="bg-secondary">
                                    <ExampleData />
                                </Row>
                                <Row className="mt-3">
                                    <h2>Original Text</h2>
                                </Row>
                                <Row className="bg-secondary p-4">
                                    Regina uxor Bondia Coras Iudei condam, licet sim infirma etc., meum facio et condo testamentum de bonis meis, ordinando etc. [deleted: in quo constituo]. In primis iubeo corpus meum sepeliri.
                                    Et iubeo dari Iuceff Choen C solidos, quos ei lego. Item dimitto Isaach de Soall XXX solidos. Item heredibus Iuceff de Soall, Iudei condam, XXX solidos. Item XX solidos Momete Iudeo. Item dimitto Mancose uxori Abrahe de la Rotxela Iudei condam, C solidos. [Deleted: Et volo iubeo quod secratarii].
                                    Item dimitto Aster sorori dicte Mancose L solidos. Item iubeo fieri quandam caritatem pro anima mea, die obitus mei, cui faciendo assigno et dimitto C solidos.
                                    Item dimitto Aster [deleted: uxori] filee mee, uxorique Fagim Bonet Iudei, pro parte et hereditate ei pertinentibus et pertinere debentibus in bonis meis C solidos barchinonenses; in quibus, et in illa dote quam habuit tempore nupciarum eius et dicti viri sui, ipsam heredem mihi instituo, et nisi aliud etc.
                                    Item dimitto Gaux, filie mee et dicti viri mei condam, pro parte et iure ei pertinentibus in bonis meis, C [solidos]; in quibus, et in illa dote quam habuit tempore nupciarum eius et Astruch Iuceff viri eius, ipsam mihi heredem instituo, et nisi aliud etc.
                                    Item dimitto elemosine Iudeorum Podiiceritani, amore dei pro anima mea, quendam lectum meum cum omnibus suis pannis et preparamentis, qui stet in scola Iudeorum predictorum. Et constituo manumissorem meum et exsecutorem huius mei testamenti Astruch Iuceff Iudeum pro[1] cui dono licenciam etc.
                                    In residuis aliis bonis meis, ubicumque sint et quecumque, Bondia et Iuceff neptes meos filiosque Astruch Bondia Iudei condam mihi heredes universales instituo. Hanc autem etc.
                                    Testes: Matheus de Oliana, Arnaldus Payleres, Raimundus Rahedor, Astruch de Besalu, Iacob Abrahe Choen, Bernardus Duran, Iuceff Abrahe, et Vitalis filius Astruch Crexent.
                                    Debet V solidos Astruch Iuceff.
                                </Row>
                                <Row className="mt-3">
                                    <h2>Translated Text</h2>
                                </Row>
                                <Row className="bg-secondary p-4">
                                Regina, the wife of the late Bondia Coras, Jew, although I am sick, etc., I make and compose my testament of my goods, organizing etc. [del: in which I constitute). First I order my body to be buried. 
                                And I order to be given to Iuceff Choen 50 solidos, which I bequeath to him. Likewise, I give to Isaac de Soall 30 solidos. Likewise, to the heirs of the late Iuceff de Soall, Jew, 20 solidos. Likewise, 20 solidos to Mometa, Jew. Likewise I give to Mancosa, wife of the late Abraham de la Rotxela, Jew, 100 solidos. 
                                Likewise, I give to Aster, the sister of the said Mancosa, 50 solidos. I also order charity to be given for my soul on the day of my death, for doing which I assign and give 100 solidos. 
                                Likewise I give to Aster [del: wife] my daughter, and the wife of Fagim Bonet, Jew, pertaining and should be pertaining to her part and inheritance, 100 Barcelonan solidos from my goods; in which [goods], and in that dowry which she had at the time of the marriage between her and her said husband, I make [her] my heiress, and nothing more, etc. 
                                Likewise, I give to Gaux, my and my said late husband’s daughter, pertaining to her part and right, 100 [solidos] from my good; in which [goods], and in that dowry which she had at the time of the marriage between her and Astruch Iuceff her husband, I make her my heiress, and nothing more, etc. 
                                Likewise I give as charity for the Jews of Puigcerdà, out of love of God for the sake of my soul, a certain bed of mine with all of its linens and preparations, which (may?) remain in the aforementioned school of the Jews [i.e. synagogue]. And I constitute as my manumitter and executor of my testament Astruch Iuceff, Jew, to whom I give liberty, etc. [boilerplate formulae]
                                As for my other remaining goods, wherever they may be, and whatever, I established as my universal heirs Bondia and Iuceff, my grandsons, and sons of the late Astruch Bondia, Jew. However this, etc. [boilerplate formulae]
                                
                                Witnesses: Matheus de Oliana, Arnaldus Payleres, Raimundus Rahedor, Astruch de Besalu, Iacob Abrahe Choen, Bernardus Duran, Iuceff Abrahe, and Vitalis son of Astruch Crexent.
                                
                                5 solidos owed to Astruch Iuceff. 
 
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