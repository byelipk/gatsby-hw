const React = require("react")

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV !== `production` && process.env.NODE_ENV !== `test`)
    return null

  const renderStyle = () => {
    return `
      .async-hide { opacity: 0 !important}
      `
  }

  const renderScript = () => {
    return `
      (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
${pluginOptions.optimizeIds.map(id => ({ [id]: true }))});
      `
  }

  return setHeadComponents([
    <style
      key={`g-optimize-anti-flicker-css`}
      dangerouslySetInnerHTML={{ __html: renderStyle() }}
    />,
    <script
      key={`g-optimize-anti-flicker-js`}
      dangerouslySetInnerHTML={{ __html: renderScript() }}
    />,
  ])
}
