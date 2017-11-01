import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import Link from 'next/link'
import Head from 'next/head'
import generateUrl from 'utils/urlGenerator'

import EditButton from 'containers/EditButton'

import stylesheet from './style.scss'

const ProgramLine = (props) => (
  <div className='program-line'>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <div className='columns is-shadowless'>
      <div className='column  is-narrow'>
        <Moment format='DD/MM/YYYY' unix>{Math.trunc(props.date / 1000)}</Moment>
      </div>
      <div className='column is-expanded'>
        <Link href={`/program?id=${props.id}`} as={`/program/${props.id}`}><a>{props.title}</a></Link>
      </div>
      <div className='column is-narrow'>
        <EditButton id={props.id} />
      </div>
      <div className='column  is-narrow'>
        <a href={generateUrl(props.url)}><i className='fa fa-download' /></a>
      </div>
    </div>
  </div>
)

ProgramLine.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.number,
  url: PropTypes.string
}

export default ProgramLine
