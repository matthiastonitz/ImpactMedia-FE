const displayEventType = (
  typeString?:
    | 'video'
    | 'animated_video'
    | 'event'
    | 'live_stream'
    | 'campaign'
    | 'branding'
    | string
    | null
) => {
  switch (typeString) {
    case 'video':
      return 'Video';
    case 'animated_video':
      return 'Animated video';
    case 'live_stream':
      return 'Live Stream';
    case 'event':
      return 'Event';
    case 'branding':
      return 'Branding';
    case 'campaign':
      return 'Campaign';
    default:
      return null;
  }
};

export default displayEventType;
