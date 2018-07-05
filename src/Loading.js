import React, { Component } from 'react';
import ProgressBar from 'progressbar.js';
import './Loading.css';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.animateProgressBarTo = this.animateProgressBarTo.bind(this);
  }

  animateProgressBarTo(progressBar, percentage, duration) {
    return new Promise((resolve, reject) => {
      progressBar.animate(percentage, { duration: duration }, function() {
          resolve();
      });
    });
  }

  render() {
    return (
      <div className="Loading"></div>
    );
  }

  componentDidMount() {
    var bar = new ProgressBar.Circle('.Loading', {
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

    bar.text.style.fontFamily = '"Terminal", monospace';
    bar.text.style.fontSize = '2rem';

    this.animateProgressBarTo(bar, 0.14, 1000)
      .then(() => { return this.animateProgressBarTo(bar, 0.64, 2200) })
      .then(() => { return this.animateProgressBarTo(bar, 0.92, 3000) })
      .then(() => { return this.animateProgressBarTo(bar, 0.98, 1500) })
      .then(() => { return this.animateProgressBarTo(bar, 1.00, 1500) })
  }

}

export default Loading;
