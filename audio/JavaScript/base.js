$(function () {
    var audio = document.getElementById('audio-my');
    var audioPlay = false;
    var audioMax = false;
    var audioName = ['王大毛-忆少年', '大象体操-被子', '花粥&马雨阳-盗将行', '米津玄師-Lemon',
    '万能青年旅店-杀死那个石家庄人'];
    var audioLicSong0 = '[00:00.00]忆少年 - 王大毛[00:03.73]词：林施 [00:07.46]曲：林施[00:11.20]编曲：杨栋梁/GK康康[00:14.93]混音：杨栋梁[00:18.67]和音：林施[00:22.40]制作人：林施[00:26.14]不远古老的石桥[00:29.32]桥下细柳弯着腰[00:32.35][00:33.11]小船划过水面琴声飘[00:37.80][00:38.70]古街灯笼照今宵[00:41.92]垂髫哼唱着童谣[00:45.73]门庭若市延绵到城郊[00:50.33][00:51.33]窈窕淑女倾城笑[00:54.39]公子翩翩好俊俏[00:58.31]我的少年会不会寂寥[01:03.52]在画中你俊逸逍遥[01:07.93]长衣衫飘飘[01:10.95]一挥折扇才气也佼佼[01:16.11]看今夜明月又皓皓[01:20.57]万家灯火耀[01:23.59]一曲相思忆往昔年少[01:28.61][01:41.96]古街灯笼照今宵[01:44.92]垂髫哼唱着童谣[01:48.87]门庭若市延绵到城郊[01:54.44]窈窕淑女倾城笑[01:57.55]公子翩翩好俊俏[02:01.41]我的少年会不会寂寥[02:06.58]在画中你俊逸逍遥[02:11.02]长衣衫飘飘[02:14.07]一挥折扇才气也佼佼[02:19.35]看今夜明月又皓皓[02:23.64]万家灯火耀[02:26.70]一曲相思忆往昔年少[02:32.14]在画中你俊逸逍遥[02:36.34]长衣衫飘飘[02:39.47]一挥折扇才气也佼佼[02:44.54]看今夜明月又皓皓[02:48.98]万家灯火耀[02:52.00]一曲相思忆往昔年少';
    var audioLicSong1 ='[00:00.00]被子 (Quilt) - 大象体操[00:04.82]词：张凯翔[00:09.65]曲：张凯翔/张凯婷[00:14.48]忘了吃饭 忘了洗碗[00:19.07]忘了散步的傍晚[00:23.53]忘了说 的晚安[00:29.02]忘了赖床 忘了做爱[00:33.28]忘到你慢慢走来[00:37.52]对我说了 早安[01:07.35]你的眼神[01:10.97]微透光了清晨[01:14.04]唤醒我的本能[01:17.72]我的嘴唇[01:21.18]还有你的余温[01:24.19]偷偷梦见了 一个吻[02:03.30]你的眼神[02:06.74]微透光了清晨[02:09.59]唤醒我的本能[02:13.41]我的嘴唇[02:17.10]还有你的余温[02:19.95]偷偷梦见了 一个吻[03:40.24]不再追问[03:43.20]对或错或假或真[03:46.80]一切都是过程[03:50.85]放弃所有[03:54.06]成为伟大的可能[03:57.41]现在只想要';
    var audioLicSong2 = '[00:05.00]歌名：盗将行[00:10.00]歌手：花粥、马雨阳[00:18.00]劫过九重城关 我座下马正酣[00:23.00]看那轻飘飘的衣摆 趁擦肩把裙掀[00:29.00]踏遍三江六岸 借刀光做船帆[00:35.00]任露水浸透了短衫 大盗睥睨四野[00:43.00]枕风宿雪多年 我与虎谋早餐[00:49.00]拎着钓叟的鱼弦 问卧龙几两钱[00:55.00]蜀中大雨连绵 关外横尸遍野[01:02.00]你的笑像一条恶犬 撞乱了我心弦[01:23.00]谈花饮月赋闲 这春宵艳阳天[01:28.00]待到梦醒时分睁眼 铁甲寒意凛冽[01:34.00]夙愿只隔一箭 故乡近似天边[01:40.00]不知何人浅唱弄弦 我彷徨不可前[01:51.00]枕风宿雪多年 我与虎谋早餐[01:57.00]拎着钓叟的鱼弦 问卧龙几两钱[02:03.00]蜀中大雨连绵 关外横尸遍野[02:09.00]你的笑像一条恶犬 撞乱我心弦[02:15.00]烽烟万里如衔 掷群雄下酒宴[02:22.00]谢绝策勋十二转 想为你窃玉簪[02:28.00]入巷间吃汤面 笑看窗边飞雪[02:34.00]取腰间明珠弹山雀 立枇杷于庭前[02:45.00]入巷间吃汤面 笑看窗边飞雪[02:53.00]取腰间明珠弹山雀 立枇杷于庭前';
    var audioLicSong3 = '[00:00.00]Lemon-米津玄師[00:01.53]词：米津玄師[00:01.55]曲：米津玄師[00:01.60]夢ならば[00:02.88]どれほどよかったでしょう[00:06.88]未だにあなたのことを夢にみる[00:12.41]忘れた物を取りに帰るように[00:17.91]古びた思い出の埃を払う[00:26.27]戻らない幸せがあることを[00:31.73]最後にあなたが教えてくれた[00:37.25]言えずに隠してた昏い過去も[00:42.80]あなたがいなきゃ[00:44.92]永遠に昏いまま[00:48.57]きっともうこれ以上[00:51.36]傷つくことなど[00:54.18]ありはしないとわかっている[00:58.98]あの日の悲しみさえ[01:01.74]あの日の苦しみさえ[01:04.52]そのすべてを愛してた[01:07.28]あなたとともに[01:09.98]胸に残り離れない[01:13.07]苦いレモンの匂い[01:15.84]雨が降り止むまでは帰れない[01:21.39]今でもあなたはわたしの光[01:37.98]暗闇であなたの背をなぞった[01:43.43]その輪郭を鮮明に覚えている[01:48.97]受け止めきれないものと[01:52.20]出会うたび[01:54.50]溢れてやまないのは涙だけ[02:00.32]何をしていたの[02:03.16]何を見ていたの[02:05.92]わたしの知らない横顔で[02:10.69]どこかであなたが今[02:13.43]わたしと同じ様な[02:16.31]涙にくれ[02:17.64]淋しさの中にいるなら[02:21.71]わたしのことなどどうか[02:24.85]忘れてください[02:27.60]そんなことを心から願うほどに[02:33.13]今でもあなたはわたしの光[02:41.64]自分が思うより[02:47.19]恋をしていたあなたに[02:52.72]あれから思うように[02:58.24]息ができない[03:03.33]あんなに側にいたのに[03:09.27]まるで嘘みたい[03:14.40]とても忘れられない[03:20.21]それだけが確か[03:30.81]あの日の悲しみさえ[03:33.41]あの日の苦しみさえ[03:36.22]そのすべてを愛してた[03:38.97]あなたとともに[03:41.67]胸に残り離れない[03:44.77]苦いレモンの匂い[03:47.61]雨が降り止むまでは帰れない[03:53.09]切り分けた果実の片方の様に[03:58.60]今でもあなたはわたしの光';
    var audioLicSong4 = '[00:00.00]杀死那个石家庄人 - 万能青年旅店[00:15.51]词: 姬赓[00:31.02]曲: 董亚千[00:46.53]傍晚六点下班[00:48.51][00:51.26]换掉药厂的衣裳[00:54.05][00:56.96]妻子在熬粥[00:59.00][01:01.90]我去喝几瓶啤酒[01:04.03][01:05.91]如此生活三十年[01:09.00][01:11.25]直到大厦崩塌[01:14.76][01:16.04]云层深处的黑暗啊[01:19.79][01:21.37]淹没心底的景观[01:25.23][01:48.96]在八角柜台[01:50.79][01:53.54]疯狂的人民商场[01:55.57][01:58.98]用一张假钞 [02:00.70][02:04.51]买一把假枪 [02:06.03][02:07.71]保卫她的生活[02:11.27][02:13.25]直到大厦崩塌[02:15.94][02:18.28]夜幕覆盖华北平原[02:21.23][02:22.86]忧伤浸透她的脸[02:25.90][02:50.67]河北师大附中[02:52.44][02:56.51]乒乓少年背向我[02:58.33][03:00.88]沉默的注视[03:02.35][03:05.70]无法离开的教室[03:07.83][03:09.82]生活在经验里[03:11.95][03:15.21]直到大厦崩塌[03:17.30][03:19.85]一万匹脱缰的马[03:22.13][03:25.69]在她脑海中奔跑[03:27.41][04:12.35]如此生活三十年[04:14.12][04:17.08]直到大厦崩塌[04:19.98][04:22.73]一万匹脱缰的马[04:24.86][04:26.65]在她脑海中奔跑[04:29.54][04:32.69]如此生活三十年[04:35.13][04:37.69]直到大厦崩塌[04:40.14][04:42.02]云层深处的黑暗啊[04:46.03]淹没心底的景观';
    var aaaa = [audioLicSong0, audioLicSong1, audioLicSong2, audioLicSong3, audioLicSong4];
    var audioLic1 = audioLicSong0.split('[');
    var audioLic2 = new Array();
    var audioLicTime = new Array();
    for(var i = 1; i < audioLic1.length; i++){
        var b = audioLic1[i].split(']');
        audioLic2.push(b);
    }
    for(var i = 0; i < audioLic2.length; i++){
        var d = audioLic2[i][0].split('.');
        audioLicTime.push(d[0]);
    }
    var audioIndex = 0;
    var audioText = new Array();
    var audioLoop = false;
    var outTextValue = 0;
    var audioSpeed = 1.8;
    audioText = audioName[0].split('-');
    $('.audio-head-tittle-text').text(audioText[1]);
    $('.audio-head-tittle-text-out').text(audioText[1]);
    $('.audio-head-tittle-text-out-a').text(audioText[1]);
    $('.audio-head-tittle-by').text(audioText[0]);
    $('.audio-text').text(audioLic2[0][1]);
    function drawAudioArc() {
        var audioCanvas = document.getElementById('audio-img-canvas');
        var audioCtx = audioCanvas.getContext('2d');
        audioCtx.translate(100, 100);
        audioCtx.strokeStyle = 'rgba(255,255,255,1)';
        audioCtx.lineWidth= '6';
        audioCtx.arc(0, 0, 80, 0, Math.PI*2, true);
        audioCtx.stroke();
        audioCtx.beginPath();
        audioCtx.lineWidth= '3';
        audioCtx.arc(0,0,72,Math.PI/6, Math.PI/6*4, false);
        audioCtx.stroke();
        audioCtx.beginPath();
        audioCtx.arc(0,0,72,Math.PI/6*9, Math.PI/6*6, true);
        audioCtx.stroke();
        audioCtx.beginPath();
        audioCtx.lineWidth= '2';
        audioCtx.arc(0,0,50,Math.PI/6*9, Math.PI/6*11, true);
        audioCtx.stroke();
    }
    function drawAudioPlay() {
        var audioCanvasPlay = document.getElementById('audio-img-canvas-play');
        var audioCtxPlay = audioCanvasPlay.getContext('2d');
        audioCtxPlay.translate(25, 10);
        audioCtxPlay.lineWidth= '4';
        audioCtxPlay.strokeStyle = 'rgba(255,255,255,1)';
        audioCtxPlay.rect(-10,0,20,20);
        audioCtxPlay.stroke();
        audioCtxPlay.beginPath();
        audioCtxPlay.rect(-10,20,20,10);
        audioCtxPlay.stroke();
        audioCtxPlay.beginPath();
        audioCtxPlay.moveTo(0,30);
        audioCtxPlay.lineTo(0,140);
        audioCtxPlay.stroke();
        audioCtxPlay.beginPath();
        audioCtxPlay.translate(0, 140);
        audioCtxPlay.rotate(120);
        audioCtxPlay.rect(0,0,18,32);
        audioCtxPlay.stroke();
        audioCtxPlay.beginPath();
        audioCtxPlay.lineWidth= '2';
        audioCtxPlay.moveTo(10,25);
        audioCtxPlay.lineTo(30,25);
        audioCtxPlay.stroke();
        audioCtxPlay.beginPath();
    }
    function playAudio(){
        if(audio.paused || audio.ended) {
            audioPlay = true;
            audio.play();
            $('.audio-btn-play').removeClass('audio-btn-play-off').addClass('audio-btn-play-on');
        }
        else {
            audioPlay = false;
            $('.audio-btn-play').removeClass('audio-btn-play-on').addClass('audio-btn-play-off');
            audio.pause();
        }
        $('#audio-img-canvas-play').toggleClass('audio-img-canvas-play-on');
        $('#audio-img-canvas').toggleClass('audio-img-canvas-on');
    }
    function timeFormat(seconds) {
        var minite = Math.floor(seconds / 60);
        if(minite < 10) {
            minite = "0" + minite;
        }
        var second = Math.floor(seconds % 60);
        if(second < 10) {
            second = "0" + second;
        }
        return minite + ":" + second;
    }
    function updateProgress(x){
        var progress = $('.audio-by-all');
        var position = x - progress.offset().left;
        var percentage = 100 * position / progress.width();
        if(percentage > 100) {
            percentage = 100;
        }
        if(percentage < 0) {
            percentage = 0;
        }
        $('.audio-by-now').css('width', percentage+'%');
        audio.currentTime = audio.duration * percentage / 100;
    }
    function enableProgressDrag() {
        var progressDrag = false;
        $('.audio-by-all').on('mousedown', function(e) {
            progressDrag = true;
            updateProgress(e.pageX);
        });
        $(document).on('mouseup', function(e) {
            if(progressDrag) {
                progressDrag = false;
                updateProgress(e.pageX);
            }
        });
        $(document).on('mousemove', function(e) {
            if(progressDrag) {
                updateProgress(e.pageX);
            }
        });
    }
    function qiehuan(){
        if (audioIndex == audioName.length ){
            audioIndex = 0;
        }
        if (audioIndex == -1 ){
            audioIndex = audioName.length - 1;
        }
        audioText = new Array();
        audioText = audioName[audioIndex].split('-');
        $('.audio-head-tittle-text').text(audioText[1]);
        $('.audio-head-tittle-by').text(audioText[0]);
        $('.audio-head-tittle-text-out').text(audioText[1]);
        $('.audio-head-tittle-text-out-a').text(audioText[1]);
        $('.audio-head-tittle-text').css('text-indent', 0);
        for (var i = 0; i < audioName.length; i++) {
            $('.play-list-all').eq(i).removeClass('play-list-all-now');
        }
        $('.play-list-all').eq(audioIndex).addClass('play-list-all-now');
        audio.src = 'soures/' + audioName[audioIndex] + '.mp3';
        var audioImg = 'url(soures/' + audioText[1] + '.jpg)';
        if(audioMax){
            $('.audio-img-cover').css({
                'background': audioImg + 'no-repeat center',
                'background-size': '90px 90px',
            });
        } else {
            $('.audio-img-cover').css({
                'background': audioImg + 'no-repeat center',
                'background-size': '40px 40px',
            });
        }
        $('.audio-by-now').css('width', 0);
        if(audioPlay){
            audio.play();
        }
        audioLic1 = new Array();
        audioLic2 = new Array();
        audioLicTime = new Array();
        audioLic1 = aaaa[audioIndex].split('[');
        for(var i = 1; i < audioLic1.length; i++){
            var b = audioLic1[i].split(']');
            audioLic2.push(b);
        }
        for(var i = 0; i < audioLic2.length; i++){
            var d = audioLic2[i][0].split('.');
            audioLicTime.push(d[0]);
        }
        $('.audio-text').text(audioLic2[0][1]);
    }
    function enableSoundDrag() {
        var volumeDrag = false;
        $('.audio-sound').on('mousedown', function(e) {
            volumeDrag = true;
            updateVolume(e.pageX);
        });
        $(document).on('mouseup', function(e) {
            if(volumeDrag) {
                volumeDrag = false;
                updateVolume(e.pageX);
            }
        });
        $(document).on('mousemove', function(e) {
            if(volumeDrag) {
                updateVolume(e.pageX);
            }
        });
    }
    function updateVolume(x, vol) {
        var volume = $('.audio-sound');
        var soundLeft = x - volume.offset().left;
        var percentage;
        if(vol) {
            percentage =vol * 100;
        } else {
            var position = soundLeft;
            percentage = 100 * position / volume.width();
        }
        if(percentage > 100) {
            percentage = 100;
        }
        if(percentage < 0) {
            percentage = 0;
        }
        percentage = parseInt(percentage);
        $('.audio-sound-now').css('width', percentage + '%');
        $('.audio-sound-art').css('left', percentage + '%');
        audio.volume = percentage / 100;
    }
    function audioTextOut() {
        if(audioMax){
            var audioTextWidth = $('.audio-head-tittle-text-out-a').width();
            var audioTittleWidth = $('.audio-head-tittle-text').width();
        } else {
            var audioTextWidth = $('.audio-head-tittle-text-out').width();
            var audioTittleWidth = $('.audio-head-tittle-text').width();
        }
        if((audioTextWidth > audioTittleWidth) && !audioMax){
            if(outTextValue <= -(audioTextWidth - audioTittleWidth + 8)){
                audioSpeed = -audioSpeed;
            }
            if(outTextValue >= 8){
                audioSpeed = -audioSpeed;
            }
            outTextValue -= audioSpeed;
            var outText = outTextValue + 'px';
            $('.audio-head-tittle-text').css('text-indent', outText);
        }
        if((audioTextWidth > audioTittleWidth) && audioMax){
            if(outTextValue <= -(audioTextWidth - audioTittleWidth + 20)){
                audioSpeed = -audioSpeed;
            }
            if(outTextValue >= 20){
                audioSpeed = -audioSpeed;
            }
            outTextValue -= audioSpeed;
            var outText = outTextValue + 'px';
            $('.audio-head-tittle-text').css('text-indent', outText);
        }
    }
    function audioOffAndOn() {
        $('.audio').toggleClass('audio-off');
        $('.audio-play-list').toggleClass('audio-play-list-off');
        $('.audio-img-cover').toggleClass('audio-img-cover-off');
        $('.audio-btn-play').toggleClass('audio-btn-play-off-a');
        $('.audio-head-tittle-by').toggleClass('audio-head-tittle-by-off');
        $('.audio-head-tittle').toggleClass('audio-head-tittle-off');
        $('.min-time').toggleClass('min-time-off');
        $('.audio-head-tittle-text').toggleClass('audio-head-tittle-text-off');
        $('.audio-btn-play').css('animation', '');
        audioMax = !audioMax;
        $('.audio-head-tittle-text').css('text-indent', 0);
        outTextValue = 0;
        audioSpeed = Math.abs(audioSpeed);
        $('.audio-img-cover').css({
            'background-size': '90px 90px',
        });
    }
    function audioMouseLeave() {
        if(audioPlay){
            $('.audio-btn-play').css('animation', 'img-cover linear 2.5s infinite');
        }
        $('.audio-sound').removeClass('audio-sound-on');
        $('.audio-img-cover').css({
            'background-size': '40px 40px',
        });
    }
    function audioPlayUpdate() {
        var currentTime = audio.currentTime;
        var duration = audio.duration;
        var percent = 100 * currentTime / duration;
        $('.audio-by-now').css('width', percent + '%');
        $('.min-time').css('width', percent+'%');
        $('.audio-by-text-now').text(timeFormat(currentTime));
        for(var i = 0; i < audioLicTime.length; i++) {
            if (timeFormat(currentTime) == audioLicTime[i]) {
                if (audioLic2[i][1] != []){
                    $('.audio-text').text(audioLic2[i][1]);
                }
            }
        }
        audioTextOut();
    }

    drawAudioArc();
    drawAudioPlay();
    updateVolume(0, 0.5);
    $('#audio-my').on("loadedmetadata", function(){
        $('.audio-by-text-now').text(timeFormat(0));
        $('.audio-by-text-all').text(timeFormat(audio.duration));
        enableProgressDrag();
        enableSoundDrag();
    });
    $('.audio-by-text-now').text(timeFormat(0));
    $('.audio-by-text-all').text(timeFormat(audio.duration));
    $('#audio-my').on("timeupdate", function(){
        audioPlayUpdate();
    });
    $('#audio-my').on('ended', function() {
        if(!audioLoop){
            audioIndex += 1;
        }
        qiehuan();
    });
    $('.play-list-all').on('click', function () {
        audioIndex = $(this).index();
        qiehuan();
    });
    $('#audio-img-canvas-play').on('click', function () {
        playAudio();
    });
    $('.audio-btn-play').on('click', function () {
        playAudio();
    });
    $('.audio-btn-next').on('click', function () {
        audioIndex += 1;
        qiehuan();
    });
    $('.audio-btn-before').on('click', function () {
        audioIndex -= 1;
        qiehuan();
    });
    $('.audio-btn-sound').on('click', function () {
        $('.audio-sound').toggleClass('audio-sound-on');
    });
    $('.audio-btn-list').on('click', function () {
        if (!audioLoop){
            $('.audio-btn-list').removeClass('audio-btn-list-off').addClass('audio-btn-list-on');
        } else {
            $('.audio-btn-list').removeClass('audio-btn-list-on').addClass('audio-btn-list-off');
        }
        audioLoop = ! audioLoop;
    });
    $("#audio").hover(function() {
        audioOffAndOn();
    });
    $("#audio").mouseleave(function() {
        audioMouseLeave();
    })
});