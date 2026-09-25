// Web Audio API ambient audio generator for dark studio soundscape

class StudioAudio {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private gainNode: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        this.audioCtx = new AudioContextClass();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      // Gentle, low volume ambient drone
      this.gainNode.gain.exponentialRampToValueAtTime(0.04, this.audioCtx.currentTime + 3);

      // Warm low freq ambient tone
      this.osc1 = this.audioCtx.createOscillator();
      this.osc1.type = 'sine';
      this.osc1.frequency.setValueAtTime(108, this.audioCtx.currentTime); // Deep warm hum A2

      // Subtle atmospheric harmonic
      this.osc2 = this.audioCtx.createOscillator();
      this.osc2.type = 'sine';
      this.osc2.frequency.setValueAtTime(162, this.audioCtx.currentTime); // E3 perfect fifth

      this.osc1.connect(this.gainNode);
      this.osc2.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);

      this.osc1.start();
      this.osc2.start();

      this.isPlaying = true;
    } catch (e) {
      console.warn('Audio Context error:', e);
      this.isPlaying = false;
    }
  }

  public stop() {
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 1);
      setTimeout(() => {
        try {
          this.osc1?.stop();
          this.osc2?.stop();
          this.osc1?.disconnect();
          this.osc2?.disconnect();
        } catch (e) {}
      }, 1000);
    }
    this.isPlaying = false;
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const studioAudio = new StudioAudio();
