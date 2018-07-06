import React, { Component } from 'react';
import ProgressBar from 'progressbar.js';
import './Loading.css';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.animateProgressBarTo = this.animateProgressBarTo.bind(this);
    this.startProgressBarAnimation = this.startProgressBarAnimation.bind(this);
  }

  animateProgressBarTo(percentage, duration) {
    return new Promise((resolve, reject) => {
      this.bar.animate(percentage, { duration: duration }, function() {
          resolve();
      });
    });
  }

  startProgressBarAnimation() {
    return this.animateProgressBarTo(0.14, 1000)
      .then(() => { return this.animateProgressBarTo(0.64, 2200) })
      .then(() => { return this.animateProgressBarTo(0.92, 3000) })
      .then(() => { return this.animateProgressBarTo(0.98, 1500) })
      .then(() => { return this.animateProgressBarTo(0.99, 1500) })
      .then(() => { return this.animateProgressBarTo(1.00, 1500) })
  }

  componentDidMount() {
    this.bar = new ProgressBar.Circle('.progress-bar-container', {
      color: '#999',
      strokeWidth: 4,
      trailWidth: 1,
      trailColor: '#eee',
      // easing: 'easeInOutQuad',
      text: {
        autoStyleContainer: false
      },
      from: { color: '#FFEA82', width: 1 },
      to: { color: '#ED6A5A', width: 4 },
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }
      }
    });

    this.startProgressBarAnimation()
  }

  render() {
    return (
      <div className="Loading">
        <div className="progress-bar-container"></div>
        <div className="caption">
          <span>Connecting</span>
        </div>
      </div>
    );
  }

}

export default Loading;
