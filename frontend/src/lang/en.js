export default {
  sidebar: {
    home: 'Home',
    stylegen: 'Style Generator',
    help: 'Help',
    projectAddress: 'Project Address',
    giftRecordOfficial: 'Official Super Chat Record'
  },
  home: {
    roomIdEmpty: "Room ID can't be empty",
    roomIdInteger: 'Room ID must be positive integer',

    general: 'General',
    roomId: 'Room ID',
    showDanmaku: 'Show messages',
    showGift: 'Show Super Chats',
    showGiftName: 'Show gift name',
    mergeSimilarDanmaku: 'Merge similar messages',
    mergeGift: 'Merge gifts',
    minGiftPrice: 'Min price of Super Chats to show (CNY)',
    maxNumber: 'Max number of messages',

    block: 'Block',
    giftDanmaku: 'Block system messages (gift effect)',
    blockLevel: 'Block user level lower than',
    informalUser: 'Block informal users',
    unverifiedUser: 'Block unverified users',
    blockKeywords: 'Block keywords',
    onePerLine: 'One per line',
    blockUsers: 'Block users',
    blockMedalLevel: 'Block medal level lower than',

    advanced: 'Advanced',
    relayMessagesByServer: 'Relay messages by server',
    autoTranslate: 'Auto translate messages to Japanese (requires relay messages by server)',
    giftUsernamePronunciation: 'Pronunciation of gift username',
    dontShow: 'None',
    pinyin: 'Pinyin',
    kana: 'Kana',

    emoticon: 'Custom Emotes',
    emoticonKeyword: 'Emote Code',
    emoticonUrl: 'URL',
    operation: 'Operation',
    addEmoticon: 'Add emote',
    emoticonFileTooLarge: 'File size is too large. Max size is 1MB',

    roomUrl: 'Room URL',
    enterRoom: 'Enter room',
    enterTestRoom: 'Enter test room',
    exportConfig: 'Export config',
    importConfig: 'Import config',

    failedToParseConfig: 'Failed to parse config: '
  },
  stylegen: {
    legacy: 'Classic',
    lineLike: 'Line-like',

    light: 'light',
    dark: 'dark',

    outlines: 'Outlines',
    showOutlines: 'Show outlines',
    outlineSize: 'Outline size',
    outlineColor: 'Outline color',

    avatars: 'Avatars',
    showAvatars: 'Show avatars',
    avatarSize: 'Avatar size',

    userNames: 'User Names',
    showUserNames: 'Show user names',
    font: 'Font',
    fontSize: 'Font size',
    lineHeight: 'Line height (0 for default)',
    normalColor: 'Normal color',
    ownerColor: 'Owner color',
    moderatorColor: 'Moderator color',
    memberColor: 'Member color',
    showBadges: 'Show badges',
    showColon: 'Show colon after name',
    emoticonSize: 'Emoticon size',

    messages: 'Messages',
    color: 'Color',
    onNewLine: 'On new line',

    time: 'Timestamps',
    showTime: 'Show timestamps',

    backgrounds: 'Backgrounds',
    bgColor: 'Background color',
    useBarsInsteadOfBg: 'Use bars instead of backgrounds',
    messageBgColor: 'Message background color',
    ownerMessageBgColor: 'Owner background color',
    moderatorMessageBgColor: 'Moderator background color',
    memberMessageBgColor: 'Member background color',

    scAndNewMember: 'Super Chat / New Member',
    firstLineFont: 'First line font',
    firstLineFontSize: 'First line font size',
    firstLineLineHeight: 'First line line height (0 for default)',
    firstLineColor: 'First line color',
    secondLineFont: 'Second line font',
    secondLineFontSize: 'Second line font size',
    secondLineLineHeight: 'Second line line height (0 for default)',
    secondLineColor: 'Second line color',
    scContentLineFont: 'Super Chat content font',
    scContentLineFontSize: 'Super Chat content font size',
    scContentLineLineHeight: 'Super Chat content line height (0 for default)',
    scContentLineColor: 'Super Chat content color',
    showNewMemberBg: 'Show new member background',
    showScTicker: 'Show Super Chat ticker',
    showOtherThings: 'Show everything other than Super Chat ticker',

    animation: 'Animation',
    animateIn: 'Animate in',
    fadeInTime: 'Fade in time (miliseconds)',
    animateOut: 'Animate out (remove old messages)',
    animateOutWaitTime: 'Wait time (seconds)',
    fadeOutTime: 'Fade out time (miliseconds)',
    slide: 'Slide',
    reverseSlide: 'Reverse slide',
    playAnimation: 'Play animation',

    result: 'Result',
    copy: 'Copy',
    resetConfig: 'Reset config'
  },
  help: {
    help: 'Help',
    p1: '1. Copy the room ID from the Bilibili live room webpage',
    p2: '2. Enter the room ID into the room ID on the home page. Copy the room URL',
    p3: '3. Generate styles with the style generator. Copy the CSS',
    p4: '4. Add browser source in OBS',
    p5: '5. Enter the previously copied room URL at URL, and enter the previously copied CSS at custom CSS'
  },
  chat: {
    moderator: 'moderator',
    guardLevel1: 'governor',
    guardLevel2: 'admiral',
    guardLevel3: 'captain',
    sendGift: 'Sent {giftName}x{num}',
    membershipTitle: 'New member',
    tickerMembership: 'Member'
  }
}
