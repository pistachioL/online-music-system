// 底部播放栏组件
<template>
  <div class="mini-player" id="mini-player">
    <!-- 歌曲内容 -->
    <div class="song">
      <template v-if="hasCurrentSong">
        <div @click="togglePlayerShow" class="img-wrap">
          <div class="mask"></div>
          <img v-lazy="" class="blur" />
          <div class="player-control">
            <Icon :size="24" :type="playControlIcon" color="white" />
          </div>
        </div>
        <div class="content">
          <div class="top">
            <p class="name">name</p>
            <p class="split">-</p>
            <p class="artists">artists</p>
          </div>
          <div class="time">
            <span class="played-time">
                played-time
            </span>
            <span class="split">/</span>
            <span class="total-time">
                total-time
            </span>
          </div>
        </div>
      </template>
    </div>
    <!-- 控制台 -->
    <div class="control">
      <Icon :size="24" @click="prev" class="icon" type="prev" />
      <el-popover
        :value="isPlayErrorPromptShow"
        placement="top"
        trigger="manual"
        width="160"
      >
        <p>请点击开始播放。</p>
        <div @click="togglePlaying" class="play-icon" slot="reference">
          <Icon :size="24" :type="playIcon" />
        </div>
      </el-popover>

      <Icon :size="24" @click="next" class="icon" type="next" />
    </div>

    <div class="mode">
      <!-- 模式 -->
      <el-popover placement="top" trigger="hover" width="160">
        <p> playModeText </p>
        <Icon
          :size="20"
          type="sequence"
          @click="onChangePlayMode"
          class="mode-item"
          slot="reference"
        />
      </el-popover>
    </div>
    <div class="progress-bar-wrap">
      <ProgressBar
        disabled="true"
        percent="12"
        @percentChange="onProgressChange"
      />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

const DEFAULT_VOLUME = 0.75
export default {
  data() {
    return {
      isPlayErrorPromptShow: false,
      songReady: false,
    }
  },
  mounted() {
    this.audio.volume = this.volume
  },
  methods: {
    togglePlaying() {
    },
    ready() {
      this.songReady = true
    },
    async play() {
    },
    pause() {
      this.audio.pause()
    },
    updateTime(e) {
      const time = e.target.currentTime
      this.setCurrentTime(time)
    },
    prev() {
    },
    next() {
    },
    end() {
      this.next()
    },
    onProgressChange(percent) {
    },
    onVolumeChange(percent) {
    },
    onChangePlayMode() {
    },
    togglePlaylistShow() {
    },
    togglePlayerShow() {
    },
  },
  watch: {
    currentSong(newSong, oldSong) {
      // 清空了歌曲
      if (!newSong.id) {
        this.audio.pause()
        this.audio.currentTime = 0
        return
      }
      // 单曲循环
      if (oldSong && newSong.id === oldSong.id) {
        this.setCurrentTime(0)
        this.audio.currentTime = 0
        this.play()
        return
      }
      this.songReady = false
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.play()
      }, 1000)
    },
    playing(newPlaying) {
      this.$nextTick(() => {
        newPlaying ? this.play() : this.pause()
      })
    }
  },
  computed: {
    hasCurrentSong() {
      // return isDef(this.currentSong.id)
    },
    playIcon() {
      return this.playing ? "pause" : "play"
    },
    audio() {
      return this.$refs.audio
    },
    // 播放的进度百分比
    playedPercent() {
      const { durationSecond } = this.currentSong
      return Math.min(this.currentTime / durationSecond, 1) || 0
    },
    playControlIcon() {
      // return this.isPlayerShow ? "shrink" : "open"
    },
  },
}
</script>

<style lang="scss" scoped>
.mini-player {
  position: relative;
  position: fixed;
  z-index: 1002;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 8px 16px;
  padding-right: 24px;
  background: #252525;

  .song {
    display: flex;
    flex: 4;
    overflow: hidden;

    .img-wrap {
      position: relative;
      margin-right: 8px;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;
      width: 40px;
      height: 40px;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
      }

      img {
        &.blur {
          filter: blur(2px);
        }
      }

      .player-control {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .mask {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.2);
      }
    }

    .content {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .top {
        display: flex;
        align-items: flex-end;
        white-space: nowrap;

        .name {
          color: #dcdde4;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .split {
          font-size: 10px;
          margin: 0 4px;
        }

        .artists {
          font-size: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .time {
        font-size: 10px;
        color: #5C5C5C;

        .split {
          margin: 0 4px;
        }
      }
    }
  }

  .control {
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .play-icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 45px;
      height: 45px;
      margin: 0 16px;
      border-radius: 50%;
      background: #d33a31;
      cursor: pointer;

      i {
        color: #fff;
      }
      .icon-play {
        transform: translateX(1px);
      }
    }

    .icon {
      color: #d33a31;
    }
  }

  .mode {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 6;

    .mode-item {
      display: block;
      margin-right: 16px;
      width: 22px;
    }

    .volume-item {
      margin-right: 22px;
    }
  }

  .progress-bar-wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: -14px;
  }
}

.icon {
  color: #4a4a4a;
  cursor: pointer;
}
</style>
