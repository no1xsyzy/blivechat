<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      router
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="rgb(64, 158, 255)"
      :default-active="$route.path"
    >
      <el-menu-item index="/">
        <el-icon><el-icon-s-home /></el-icon>{{ $t('sidebar.home') }}
      </el-menu-item>
      <el-menu-item :index="$router.resolve({ name: 'stylegen' }).href">
        <el-icon><el-icon-brush /></el-icon>{{ $t('sidebar.stylegen') }}
      </el-menu-item>
      <el-menu-item :index="$router.resolve({ name: 'help' }).href">
        <el-icon><el-icon-question /></el-icon>{{ $t('sidebar.help') }}
      </el-menu-item>
      <a href="https://github.com/xfgryujk/blivechat" target="_blank">
        <el-menu-item>
          <el-icon><el-icon-share /></el-icon>{{ $t('sidebar.projectAddress') }}
        </el-menu-item>
      </a>
      <a href="http://link.bilibili.com/ctool/vtuber" target="_blank">
        <el-menu-item>
          <el-icon><el-icon-link /></el-icon>{{ $t('sidebar.giftRecordOfficial') }}
        </el-menu-item>
      </a>
      <el-sub-menu index="null">
        <template v-slot:title>
          <el-icon><el-icon-chat-line-square /></el-icon>Language
        </template>
        <el-menu-item
          v-for="locale in LOCALES"
          :key="locale.locale"
          @click="onSelectLanguage(locale.locale)"
        >
          <template>{{ locale.name }}</template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import {
  HomeFilled as ElIconSHome,
  Brush as ElIconBrush,
  QuestionFilled as ElIconQuestion,
  Share as ElIconShare,
  Link as ElIconLink,
  ChatLineSquare as ElIconChatLineSquare
} from '@element-plus/icons-vue'
import * as i18n from '@/i18n'

export default {
  components: {
    ElIconSHome,
    ElIconBrush,
    ElIconQuestion,
    ElIconShare,
    ElIconLink,
    ElIconChatLineSquare
  },
  name: 'Sidebar',
  data() {
    return {
      LOCALES: [
        { locale: 'zh', name: '中文' },
        { locale: 'ja', name: '日本語' },
        { locale: 'en', name: 'English' }
      ]
    }
  },
  methods: {
    onSelectLanguage(locale) {
      i18n.setLocale(locale)
    }
  }
}
</script>

<style>
.el-scrollbar {
  height: 100%;
}

.scrollbar-wrapper {
  overflow-x: hidden !important;
}

.scrollbar-wrapper .el-menu {
  border: none;
}
</style>
