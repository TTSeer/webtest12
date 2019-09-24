;$(function(){
	$("[data-qq-href]").each(
		function(item)
		{
			var url = 'ABCD';
			if(url)
			{
			
                        $(this).click(function(){
                            setTimeout(function() {
                            window.location = url;
                            }, 200);
                            window.open(url);
                            return false;
                        });
			$(this).attr('data-url', url);
                }
		}
	);
	$("[data-weixin-href]").each(
		function(item)
		{
			var wxnum = 'FY4547';
			wxnum && $(this).html(wxnum);
		}
	);

	$("[data-qrcode]").each(
		function(item)
		{
			var image = '';
			image && $(this).attr('src', image);
		}
	);
       
        window.__TG_PLAN = window.__TG_PLAN || {
            callback: function() {
            }
        };
        window.__TG_PLAN.DATA = {
            id: '926',
            link: 'ABCD',
            weixin: 'FY4547',
            qrCodeUrl: '',
            qyPlan: {
                type: '1',
                value: ''
            }
        }
        
        if (typeof window.__TG_PLAN.callback === 'function') {
            window.__TG_PLAN.callback();
        }
        
});
