import React from 'react'
import {withReduxSaga} from 'configureStore'

import Layout from 'components/Layout'
import Title from 'components/Title'
import Meta from 'components/Meta'

class FAQPage extends React.Component {
  render () {
    return (
      <Layout>
        <div id='faq-page'>

          <Meta title='Foire aux questions' />
          <Title title='Foire aux questions' subtitle='Vous avez une question ?' />
          <section className='section'>
            <div className='container'>
              <div className='content has-text-justified'>
                <h3>Qu'est-ce que c'est : Au cœur de l'histoire ?</h3>
                <p>
                  Au cœur de l'histoire est une émission radio d'histoire diffusée sur Europe 1 depuis 2011 et présentée par Franck Ferrand.<br />
                  Vous trouverez plus d'informations sur la page <a href='https://fr.wikipedia.org/wiki/Au_c%C5%93ur_de_l%27histoire' >wikipedia</a> de l'émission.
                </p>
                <h3>Pourquoi ai-je fait ce site ?</h3>
                <p>
                  Etant un auditeur de l'émission j'ai souhaité il y a quelques temps pouvoir réécouter une émission passée. En cherchant un peu je suis tombé sur <a href='http://www.europe1.fr/emissions/au-coeur-de-l-histoire' >le site officiel d'Europe 1</a>.<br />
                  Cependant celui-ci est malheureusement dépourvu de fonctionnalités de recherche, j'ai donc décider de créer ce site afin de palier à ce manque.<br />
                  Ce site n'a aucune vocation commercial et restera toujours gratuit.
                </p>
                <h3>Est-ce que ce site est officiel ?</h3>
                <p>
                  La réponse est simple : <strong>Non</strong>.<br />
                  Je n'ai aucun lien avec Europe 1, je suis simplement un auditeur. Toutes les émissions appartiennent à Europe 1 et sont consultables sur <a href='http://www.europe1.fr/emissions/au-coeur-de-l-histoire' >le site officiel</a>.
                </p>
                <h3>Comment pouvez vous me contacter ?</h3>
                <p>
                  Il existe plusieurs moyens pour me contacter :
                </p>
                <ul>
                  <li>
                      Le plus simple reste de m'envoyer un mail à l'adresse <a href='mailto@balomosa@protonmail.com'>balomosa@protonmail.com</a>
                  </li>
                  <li>
                      Je suis également disponible sur la messagerie <a href='https://discordapp.com/'>Discord</a>, directement sur <a href='https://discord.gg/p4FahKx'>le serveur acdh.fr</a> ou en contact direct Bmagic#6057.
                  </li>
                </ul>
                <h3>Comment pouvez vous m'aider ?</h3>
                <h4>Vous &ecirc;tes un spécialiste de l'archive</h4>
                <p>
                  J'ai besoin d'explications afin de pouvoir définir les informations à faire remonter dans la recherche des émissions. Pour faire simple je n'ai aucune connaissance dans les techniques d'archivage qui existent à ce jour.
                </p>
                <h4>Vous &ecirc;tes développeur</h4>
                <p>
                  Si React, Nodejs, MongoDB, ElasticSearch et Docker ne sont pas pour vous des noms barbares, sachez que l'intégralité du code de ce site est disponible sous licence MIT directement sur le dépot <a href='https://github.com/bmagic/acdh-client'>github</a>.
                </p>
                <h4>Vous &ecirc;tes graphiste ou UX Designer</h4>
                <p>
                  N'ayant aucune sensibilité artistique je suis preneur de tous les conseils qui pourraient améliorer l'expérience utilisateur. N'hésitez pas à me contacter pour en parler.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default withReduxSaga(FAQPage)
