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
      .then(() => { return this.animateProgressBarTo(1.00, 1500) })
  }

  render() {
    return (
      <div className="Loading"></div>
    );
  }

  componentDidMount() {
    this.bar = new ProgressBar.Circle('.Loading', {
      color: '#aaa',
      strokeWidth: 4,
      trailWidth: 1,
      // easing: 'easeInOutQuad',
      text: {
        autoStyleContainer: false
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#333', width: 4 },
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

    this.bar.text.style.fontFamily = '"Terminal", monospace';
    this.bar.text.style.fontSize = '2rem';

    this.startProgressBarAnimation()
  }

}

export default Loading;
