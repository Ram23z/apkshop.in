import Script from 'next/script';
import config from '../../config.json';

interface AdProps {
    auto: boolean;
    slot: string;
    responsive: boolean;
    width?: string; // optional width prop
    height?: string; // optional height prop
}

const AdComponent = ({ auto, slot, responsive, width, height }: AdProps) => (
    <div className="w-full max-w-full text-center">
        {config.GOOGLE_ADSENSE && (

        <>
        
        <Script
            strategy="lazyOnload"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${config.GOOGLE_ADSENSE}`}
            crossOrigin="anonymous"
        />
        <ins
            className="adsbygoogle"
            style={{ 
                display: auto ? 'block' : 'inline-block',
                width: auto ? 'auto' : width,
                height: auto ? 'auto' : height
            }}
            data-ad-client={config.GOOGLE_ADSENSE}
            data-ad-slot={slot}
            data-ad-format={auto ? "auto" : undefined}
            data-full-width-responsive={responsive ? true : false}
        ></ins>
        <Script
            id="adsbygoogle-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
        
        />
        </>
        )}
    </div>
);

export default AdComponent;
