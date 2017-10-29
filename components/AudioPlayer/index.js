import React from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'
import classNames from 'classnames'

import FormattedTime from 'components/FormattedTime'

import stylesheet from './style.scss'

export class AudioPlayer extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {play: false, loading: true, time: 0, duration: 0, mute: false, volume: 50}
    this.handlePlayClick = this.handlePlayClick.bind(this)
    this.handlePauseClick = this.handlePauseClick.bind(this)
    this.handleVolumeMute = this.handleVolumeMute.bind(this)
    this.handleVolumeUnMute = this.handleVolumeUnMute.bind(this)
    this.handleVolume = this.handleVolume.bind(this)
  }

  componentDidMount () {
    this._waveSurfer = new WaveSurfer({
      container: '#waveform',
      waveColor: '#363636',
      progressColor: '#6a6a6a',
      backend: 'MediaElement',
      barHeight: 3
    })

    this._waveSurfer.on('ready', () => {
      this.setState({duration: this._waveSurfer.getDuration()})
    })

    this._waveSurfer.on('play', () => {
      this.setState({play: true})
    })
    this._waveSurfer.on('pause', () => {
      this.setState({play: false})
    })
    this._waveSurfer.on('waveform-ready', () => {
      this.setState({loading: false})
    })
    this._waveSurfer.on('audioprocess', (time) => {
      this.setState({time: time})
    })
    this._waveSurfer.init()
  }

  componentWillReceiveProps (nextProps) {
    this._waveSurfer.load(nextProps.url)
  }

  componentWillUnmount () {
    this._waveSurfer.destroy()
  }

  handlePlayClick () {
    if (this.state.play === false) { this._waveSurfer.play() }
  }

  handlePauseClick () {
    if (this.state.play === true) this._waveSurfer.pause()
  }

  handleVolumeMute () {
    this.setState({mute: true})
    this._waveSurfer.setMute(true)
  }

  handleVolumeUnMute () {
    this.setState({mute: false})
    this._waveSurfer.setMute(false)
  }

  handleVolume (e) {
    this.setState({volume: e.nativeEvent.offsetX, mute: false})
    this._waveSurfer.setVolume(e.nativeEvent.offsetX / 100)
  }

  render () {
    const mainClasses = classNames(
      {loading: this.state.loading},
      'audio-player'
    )
    return (
      <div className={mainClasses}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className='box is-paddingless is-radiusless'>
          <div id='waveform' />
          <div className='loading-message'><i className='fa fa-circle-o-notch fa-spin' /> Création du spectre en cours</div>
          <div className='level controlbar'>
            <div className='level-left'>
              <div className='level-item'>
                {!this.state.play && <button className='button is-white' onClick={this.handlePlayClick}><i className='fa fa-play' /></button>}
                {this.state.play && <button className='button is-white' onClick={this.handlePauseClick} ><i className='fa fa-pause' /></button>}
                {!this.state.mute && <button className='has-text-left button is-white' onClick={this.handleVolumeMute} ><i className='fa fa-volume-up' /> </button>}
                {this.state.mute && <button className='has-text-left button is-white' onClick={this.handleVolumeUnMute} ><i className='fa fa-volume-off' /> </button>}
                <progress className='progress is-small' onClick={this.handleVolume} value={this.state.mute ? 0 : this.state.volume} max='100'>15%</progress>
              </div>
            </div>
            <div className='level-right'>
              <div className='level-item'>
                <FormattedTime numSeconds={this.state.time} /> / <FormattedTime numSeconds={this.state.duration} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AudioPlayer.propTypes = {
  url: PropTypes.string.isRequired
}

export default AudioPlayer
