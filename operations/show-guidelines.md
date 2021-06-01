# Show Guidelines

**Showrunner Guide**

*   **Content Guidelines and Recommendations**
    *   Showrunner is responsible for the creation of all **original content** as well as for coordinating the participation of all guests.
    *   The showrunner should reinforce the Cloud Native TV brand as well as call out for Cloud Native TV subscription including notifications throughout the show at least three times during each stream (at the beginning, middle and end of the show)
    *   The showrunner should refer to the next show in the schedule at the end of his or her show.
    *   Sample scripts will be provided by the Cloud Native TV maintainers for reference of callouts, brand reinforcement and show references.
    *   <span style="text-decoration:underline;">Content Recommendations</span>
        *   **Engage your audience**. Respond, welcome and encourage discussion in the chat. Make everyone feel welcome.
        *   **Use tools to make your audience participate**. Use polls, contents and other dynamic tools (eg. Mentimeter) to promote the participation of the audience, do not restrict interaction to chat, not everybody will feel comfortable with it.
        *   **Be your best self**. Your audience is there to get to know you, be honest to yourself and **have fun**. Theres no better way to stand out from the crowd.
        *   **Create a scene**. Work on your camera frame and scenery, use lighting, props, camera angles and visual elements to communicate and capture the attention of your audience.
        *   **Explore media**. Use music, animations, video or illustrations as part of your stream, leverage media to energize and strengthen what you are looking to communicate and as a feedback mechanism to your audience.
        *   **Be deliberate, practice**. The beauty of a stream is the live, improvised and flowing experience, but that doesnt mean you should wing it. Be deliberate with a basic script outline when applicable, and practice.
        *   **Be able to answer the question what do I want my audience to walk away feeling at the end of the show?**. You may want your audience to learn new things and walk away with curiosity, or maybe  to walk away energized and pumped for the rest of the day, or perhaps youre looking to promote an emotional response and you want your audience to go and contribute to some cause. Be thoughtful and deliberate as to what you want to accomplish with your show, and design your content and experience around that.
*   **Technical Guidelines and Recommendations**
    *   The quality of the audio, video and internet connectivity is the responsibility of the showrunner. The showrunner must take all necessary measures to guarantee his/her own setup is capable of producing a high quality stream and provide all necessary instructions as well as validate the setup of all guests prior to the show.
    *   Get the right gear. Your gear is your instrument, the better equipment the more freedom you will have to explore ideas and communicate with your audience. Invest in a good microphone, camera and lightning.
*   **Scheduling and Format**
    *   Cancellations or rescheduling must be communicated with at least 48 hours notice.
    *   Showrunner must be available 15 minutes prior to the show for setup.
    *   Available show slots are set to 30mins or 60mins. The showrunner is responsible for keeping content within the designated time window.
    *   All content must be [TV-PG compliant, although a TV-G rating is preferred](https://rating-system.fandom.com/wiki/TV_Parental_Guidelines) considering the diversity of the audience.

**Twitch Operations Guidelines**

- Stream keys (and key rotation)
- Moderator tools
  - A lot of the &quot;busywork&quot; of moderation will be handled for you by Nightbot. This will handle automatic removal of comments containing slurs/banned profanity, spam, etc and timing out of the offending user. Nightbot is also capable of custom commands (e.g., typing !promo in chat will result in Nightbot replying with a link to register for KubeCon). Over time, we will add and document more commands.
  - Moderators have additional controls available natively in Twitch. From Twitch Chat Settings, toggle &quot;Show Moderation Actions&quot; to On and you will see three icons next to every user in chat: ban, timeout, and delete.
  - Banning someone from the channel does not prevent them from watching the content; it only bans them from the chat.
- Creator tools
- Contacts
  - If you have a catastrophic failure before/during your stream that you are unable to resolve, first try getting a hold of one of the following people for help:
    - Bill Mulligan
    - Kat Cosgrove
    - Pop

**OBS/Local Streaming Software**

- OBS
  - Streamlabs OBS is the most well-supported and full-featured option for live streaming to Twitch. On Windows, this is fairly painless and the process is documented [here](https://streamlabs.com/content-hub/post/getting-started-with-streamlabs-obs).
  - On MacOS or Ubuntu, you will need to use vanilla OBS. Note that OBS is fairly resource-hungry, so if you are choosing between multiple machines to stream from, choose the beefier one for running OBS. You can get OBS [here](https://obsproject.com/)
  - Either way, you will need to set up your stream overlay. On Streamlabs, this will largely be a one-click deploy. On OBS, it will be more manual but it&#39;s a well-documented process and someone from CloudNative.tv will be available to help if you run into trouble. In both cases, you will need to modify it with your specific show&#39;s logo.
  - See [../streaming/OBS/README.md](../streaming/OBS/README.md) for Scene Collections and other Assets.

**Hosted Streaming Software**

- Restream Studio
  - Restream Studio is a brower based stremaing platform that is very similar to Streamyard
  - You can find full documentation for it [here](https://restream.io/blog/restream-studio-everything-you-need-to-know/) or more info in the [help center](https://support.restream.io/en/collections/1623532-restream-studio)
  - To get access to the CNCF instance, please contact bmulligan@linuxfoundation.org
  - You will be able to customize:
    -  add logo or overlay
    -  add/remove guests easily upto 10 and with different screen options
    -  share screen, specific window or chrome tab
    -  run video before starting the stream
    -  add background image
    -  easily use external camera and microphone
    -  make the chat part of the stream
    -  add banners and scrolls
  - There are certains things that you cannot do
    - you cannot customize livestream layout other than provided by restream
    - you can only use the layouts by streamyard
    - add a background behind yourself
- Streamyard
  - Streamyard is a browser based streaming platform with which you can stream to Youtube, twitch etc.
  - Simple to use and get started, documented [here](https://streamyard.com/resources/docs/getting-started/)
  - There are things that you can customize if you have a paid plan you can:
    -  add logo (location will be top right)
    -  add overlay -> [Example](https://streamertemplates.com/)
    -  add/remove guests easily upto 10 and with different screen options
    -  share screen, specific window or chrome tab
    -  run video before starting the stream
    -  add background image
    -  easily use external camera and microphone
    -  add greenscreen background to your background
    -  chat appears in the streamyard itself
    -  you can add banners and scrolls
  - There are certains things that you cannot do
    - you cannot customize livestream layout other than provided by streamyard
    - you have to choose the layouts provided by streamyard
- Others?


** Stream Deck **

An [Elgato Stream Deck](https://www.elgato.com/en/stream-deck) is incredibly useful for quickly changing between scenes. The Standard Model is a pretty good compromise between functionality and real estate.

You can find example Stream Deck profiles at [../streaming/StreamDeck](../streaming/StreamDeck)