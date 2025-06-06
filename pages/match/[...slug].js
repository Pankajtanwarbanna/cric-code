import fetchMatches from '../../lib//fetch-matches';
import Head from 'next/head'
import matchScoreBoard from '../../lib/match-score-board';

export async function getServerSideProps({ params }) {
  const slug = params.slug[0];
  const match_url = '/live-cricket-scores/' + slug.split('~')[0] + '/' + slug.split('~')[1];
  const match = await matchScoreBoard(match_url);
  return { props: { match } }
}

export default function Match({ match }) {
  match = match.match;
  return (
    <div className="container">
      <Head>
        <title>CricCode : A fake VS code, so you can browse live cricket score in your office.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=0.1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap" rel="stylesheet" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=UA-205481997-2`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-205481997-2', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <a href="/">
        <img src="https://user-images.githubusercontent.com/25531072/138609315-ce4e736b-a72e-4255-a135-95188d48c3a5.png" height="82" style={{ position: 'fixed', top: '0', left: '372px' }} />
        <img src="https://user-images.githubusercontent.com/25531072/138609318-9377a84f-6cb4-4aa6-ac32-65fa6f87d8f6.png" height="82" style={{ position: 'fixed', top: '0', right: '0' }} />
        <img src="https://user-images.githubusercontent.com/25531072/138608847-33bb0bc5-e7bd-4c90-81af-6e13dc6d5bce.png" width="372" style={{ position: 'fixed', top: 0, 'margin-left': '10px', zIndex: '3' }} />
        <img src="https://user-images.githubusercontent.com/25531072/138609287-5d7a5cf0-17a6-47fc-ab7f-47ae52f3e6c1.png" width="372" style={{ position: 'fixed', bottom: '28px', left: 0, zIndex: 1, 'background-image': "url('https://user-images.githubusercontent.com/25531072/138609287-5d7a5cf0-17a6-47fc-ab7f-47ae52f3e6c1.png')", height: '100%' }} />
        <img src="https://user-images.githubusercontent.com/25531072/138609284-68ff3983-fb1c-4695-a1c2-c45dbb143426.png" width="372" style={{ position: 'fixed', bottom: '28px', left: '0', zIndex: 2 }} />
        <div style={{ clear: 'both' }}></div>
        <img src="https://user-images.githubusercontent.com/25531072/138609282-8c9d515b-3546-4261-b1b0-ff5ddc62f655.png" height="28" style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 3 }} />
        <img src="https://user-images.githubusercontent.com/25531072/138609281-42b3b364-360e-4b15-8256-d9c8d053f916.png" height="28" style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 2, 'background-image': "url('https://user-images.githubusercontent.com/25531072/138609281-42b3b364-360e-4b15-8256-d9c8d053f916.png')", width: '100%' }} />
        <img src="https://user-images.githubusercontent.com/25531072/138609278-fe4ff2e3-f9c1-494d-9a4d-5c7041344056.png" height="28" style={{ position: 'fixed', bottom: 0, right: 0, zIndex: 3 }} />
      </a>
      <div className="editor">
        <div className="lineNumbers">
          1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20<br />21<br />22<br />23<br />24<br />25<br />26<br />27<br />28<br />29<br />30<br />31<br />32<br />33<br />34<br />35<br />36<br />37<br />38<br />39<br />40<br />41<br />42<br />43<br />44<br />45<br />46<br />47<br />48<br />49<br />50<br />51<br />52<br />53<br />54<br />55<br />56<br />57<br />58<br />59<br />60<br />61<br />62<br />63<br />64<br />65<br />66<br />67<br />68<br />69<br />70<br />71<br />72<br />73<br />74<br />75<br />76<br />77<br />78<br />79<br />80<br />81<br />82<br />83<br />84<br />85<br />86<br />87<br />88<br />89<br />90<br />91<br />92<br />93<br />94<br />95<br />96<br />97<br />98<br />99<br />100<br />101<br />102<br />103<br />104<br />105<br />106<br />107<br />108<br />109<br />110<br />111<br />112<br />113<br />114<br />115<br />116<br />117<br />118<br />119<br />120<br />121<br />122<br />123<br />124<br />125<br />126<br />127<br />128<br />129<br />130<br />131<br />132<br />133<br />134<br />135<br />136<br />137<br />138<br />139<br />140<br />141<br />142<br />143<br />144<br />145<br />146<br />147<br />148<br />149<br />150<br />151<br />152<br />153<br />154<br />155<br />156<br />157<br />158<br />159<br />160<br />161<br />162<br />163<br />164<br />165<br />166<br />167<br />168<br />169<br />170<br />171<br />172<br />173<br />174<br />175<br />176<br />177<br />178<br />179<br />180<br />181<br />182<br />183<br />184<br />185<br />186<br />187<br />188<br />189<br />190<br />191<br />192<br />193<br />194<br />195<br />196<br />197<br />198<br />199<br />200<br />201<br />202<br />203<br />204<br />205<br />206<br />207<br />208<br />209<br />210<br />211<br />212<br />213<br />214<br />215<br />216<br />217<br />218<br />219<br />220<br />221<br />222<br />223<br />224<br />225<br />226<br />227<br />228<br />229<br />230<br />231<br />232<br />233<br />234<br />235<br />236<br />237<br />238<br />239<br />240<br />241<br />242<br />243<br />244<br />245<br />246<br />247<br />248<br />249<br />250<br />251<br />252<br />253<br />254<br />255<br />256<br />257<br />258<br />259<br />260<br />261<br />262<br />263<br />264<br />265<br />266<br />267<br />268<br />269<br />270<br />271<br />272<br />273<br />274<br />275<br />276<br />277<br />278<br />279<br />280<br />281<br />282<br />283<br />284<br />285<br />286<br />287<br />288<br />289<br />290<br />291<br />292<br />293<br />294<br />295<br />296<br />297<br />298<br />299<br />300<br />301<br />302<br />303<br />304<br />305<br />306<br />307<br />308<br />309<br />310<br />311<br />312<br />313<br />314<br />315<br />316<br />317<br />318<br />319<br />320<br />321<br />322<br />323<br />324<br />325<br />326<br />327<br />328<br />329<br />330<br />331<br />332<br />333<br />334<br />335<br />336<br />337<br />338<br />339<br />340<br />341<br />342<br />343<br />344<br />345<br />346<br />347<br />348<br />349<br />350<br />351<br />352<br />353<br />354<br />355<br />356<br />357<br />358<br />359<br />360<br />361<br />362<br />363<br />364<br />365<br />366<br />367<br />368<br />369<br />370<br />371<br />372<br />373<br />374<br />375<br />376<br />377<br />378<br />379<br />380<br />381<br />382<br />383<br />384<br />385<br />386<br />387<br />388<br />389<br />390<br />391<br />392<br />393<br />394<br />395<br />396<br />397<br />398<br />399<br />400<br />401<br />402<br />403<br />404<br />405<br />406<br />407<br />408<br />409<br />410<br />411<br />412<br />413<br />414<br />415<br />416<br />417<br />418<br />419<br />420<br />421<br />422<br />423<br />424<br />425<br />426<br />427<br />428<br />429<br />430<br />431<br />432<br />433<br />434<br />435<br />436<br />437<br />438<br />439<br />440<br />441<br />442<br />443<br />444<br />445<br />446<br />447<br />448<br />449<br />450<br />451<br />452<br />453<br />454<br />455<br />456<br />457<br />458<br />459<br />460<br />461<br />462<br />463<br />464<br />465<br />466<br />467<br />468<br />469<br />470<br />471<br />472<br />473<br />474<br />475<br />476<br />477<br />478<br />479<br />480<br />481<br />482<br />483<br />484<br />485<br />486<br />487<br />488<br />489<br />490<br />491<br />492<br />493<br />494<br />495<br />496<br />497<br />498<br />499<br />500<br />501<br />502<br />503<br />504<br />505<br />506<br />507<br />508<br />509<br />510<br />511<br />512<br />513<br />514<br />515<br />516<br />517<br />518<br />519<br />520<br />521<br />522<br />523<br />524<br />525<br />526<br />527<br />528<br />529<br />530<br />531<br />532<br />533<br />534<br />535<br />536<br />537<br />538<br />539<br />540<br />541<br />542<br />543<br />544<br />545<br />546<br />547<br />548<br />549<br />550<br />551<br />552<br />553<br />554<br />555<br />556<br />557<br />558<br />559<br />560<br />561<br />562<br />563<br />564<br />565<br />566<br />567<br />568<br />569<br />570<br />571<br />572<br />573<br />574<br />575<br />576<br />577<br />578<br />579<br />580<br />581<br />582<br />583<br />584<br />585<br />586<br />587<br />588<br />589<br />590<br />591<br />592<br />593<br />594<br />595<br />596<br />597<br />598<br />599<br />600<br />601<br />602<br />603<br />604<br />605<br />606<br />607<br />608<br />609<br />610<br />611<br />612<br />613<br />614<br />615<br />616<br />617<br />618<br />619<br />620<br />621<br />622<br />623<br />624<br />625<br />626<br />627<br />628<br />629<br />630<br />631<br />632<br />633<br />634<br />635<br />636<br />637<br />638<br />639<br />640<br />641<br />642<br />643<br />644<br />645<br />646<br />647<br />648<br />649<br />650<br />651<br />652<br />653<br />654<br />655<br />656<br />657<br />658<br />659<br />660<br />661<br />662<br />663<br />664<br />665<br />666<br />667<br />668<br />669<br />670<br />671<br />672<br />673<br />674<br />675<br />676<br />677<br />678<br />679<br />680<br />681<br />682<br />683<br />684<br />685<br />686<br />687<br />688<br />689<br />690<br />691<br />692<br />693<br />694<br />695<br />696<br />697<br />698<br />699<br />700<br />701<br />702<br />703<br />704<br />705<br />706<br />707<br />708<br />709<br />710<br />711<br />712<br />713<br />714<br />715<br />716<br />717<br />718<br />719<br />720<br />721<br />722<br />723<br />724<br />725<br />726<br />727<br />728<br />729<br />730<br />731<br />732<br />733<br />734<br />735<br />736<br />737<br />738<br />739<br />740<br />741<br />742<br />743<br />744<br />745<br />746<br />747<br />748<br />749<br />750<br />751<br />752<br />753<br />754<br />755<br />756<br />757<br />758<br />759<br />760<br />761<br />762<br />763<br />764<br />765<br />766<br />767<br />768<br />769<br />770<br />771<br />772<br />773<br />774<br />775<br />776<br />777<br />778<br />779<br />780<br />781<br />782<br />783<br />784<br />785<br />786<br />787<br />788<br />789<br />790<br />791<br />792<br />793<br />794<br />795<br />796<br />797<br />798<br />799<br />800<br />801<br />802<br />803<br />804<br />805<br />806<br />807<br />808<br />809<br />810<br />811<br />812<br />813<br />814<br />815<br />816<br />817<br />818<br />819<br />820<br />821<br />822<br />823<br />824<br />825<br />826<br />827<br />828<br />829<br />830<br />831<br />832<br />833<br />834<br />835<br />836<br />837<br />838<br />839<br />840<br />841<br />842<br />843<br />844<br />845<br />846<br />847<br />848<br />849<br />850<br />851<br />852<br />853<br />854<br />855<br />856<br />857<br />858<br />859<br />860<br />861<br />862<br />863<br />864<br />865<br />866<br />867<br />868<br />869<br />870<br />871<br />872<br />873<br />874<br />875<br />876<br />877<br />878<br />879<br />880<br />881<br />882<br />883<br />884<br />885<br />886<br />887<br />888<br />889<br />890<br />891<br />892<br />893<br />894<br />895<br />896<br />897<br />898<br />899<br />900<br />901<br />902<br />903<br />904<br />905<br />906<br />907<br />908<br />909<br />910<br />911<br />912<br />913<br />914<br />915<br />916<br />917<br />918<br />919<br />920<br />921<br />922<br />923<br />924<br />925<br />926<br />927<br />928<br />929<br />930<br />931<br />932<br />933<br />934<br />935<br />936<br />937<br />938<br />939<br />940<br />941<br />942<br />943<br />944<br />945<br />946<br />947<br />948<br />949<br />950<br />951<br />952<br />953<br />954<br />955<br />956<br />957<br />958<br />959<br />960<br />961<br />962<br />963<br />964<br />965<br />966<br />967<br />968<br />969<br />970<br />971<br />972<br />973<br />974<br />975<br />976<br />977<br />978<br />979<br />980<br />981<br />982<br />983<br />984<br />985<br />986<br />987<br />988<br />989<br />990<br />991<br />992<br />993<br />994<br />995<br />996<br />997<br />998<br />999<br />1000<br />
        </div>
        <div id="page">
          &lt;<span className="pink">!DOCTYPE</span> <span className="green">html</span>&gt;<br />
          &lt;<span className="pink">head</span>&gt;<br />
          &lt;<span className="pink">title</span>&gt;CricCode : Live Cricket Score Board, exactly the way programmers like.&lt;/<span className="pink">title</span>&gt;<br />
          &lt;<span className="pink">meta </span> <span className="green">http-equiv</span>=<span className="yellow">"last-updated"</span> <span className="green">content</span>=<span className="yellow">"{(new Date()).toISOString()}"</span>&gt;<br />
          &lt;<span className="pink">meta </span> <span className="green">name</span>=<span className="yellow">"descrption"</span> <span className="green">content</span>=<span className="yellow">"A fake VS code, that help you browse live cricket score, the way programmers like!"</span>&gt;<br />
          &lt;<span className="pink">meta </span> <span className="green">name</span>=<span className="yellow">"author"</span> <span className="green">data-title</span>=<span className="yellow">"Pankaj Tanwar"</span> <span className="green">content</span>=<span className="yellow">"<a href="https://www.pankajtanwar.in/" target="_blank">https://pankajtanwar.in/</a>"</span>&gt;<br />
          &lt;<span className="pink">meta </span> <span className="green">name</span>=<span className="yellow">"twitter:creator"</span> <span className="green">data-title</span>=<span className="yellow">"Pankaj Tanwar"</span> <span className="green">content</span>=<span className="yellow">"<a href="https://x.com/the2ndfloorguy" target="_blank">https://x.com/the2ndfloorguy/</a>"</span>&gt;<br />
          &lt;<span className="pink">meta </span> <span className="green">name</span>=<span className="yellow">"keywords"</span> <span className="green">content</span>=<span className="yellow">"Heavily inspired from <a href='https://remoteok.com/vscode' target='_blank'>remoteok.com/vscode</a> by <a href='https://twitter.com/levelsio' target='_blank'>levelsio</a>"</span><br />
          &lt;<span className="pink">meta </span> <span className="green">name</span>=<span className="yellow">"viewport"</span> <span className="green">content</span>=<span className="yellow">"width=device-width, initial-scale=1.0"</span>&gt;<br />
          <span className="grey">
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;!--
            Checkout details of match {match.title}
            --&gt;<br />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="pink">script</span>&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> title </span> = <span className="lightpurple">'{match.title}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> latest_update </span> = <span className="lightpurple">'{match.update}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> live_score </span> = <span className="lightpurple">'{match.current}'</span>;<br /><br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">function</span><span className="lightblue"> get_live_score_card </span> () {'{'}<br />
          {/* Bats Man Details */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="grey">
            &nbsp;&nbsp;&nbsp;&nbsp;//
            Batsman details &nbsp;
            <br />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> striker_end_batsman </span> = {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> name </span> = <span className="lightpurple">'{match.batsman}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> score </span> = <span className="lightpurple">'{`${match.batsmanrun}`}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> fours </span> = <span className="lightpurple">'{match.fours}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> sixes </span> = <span className="lightpurple">'{match.sixes}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br /><br />

          {/* Bowler Details */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="grey">
            &nbsp;&nbsp;&nbsp;&nbsp;//
            Bowler details &nbsp;
            <br />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> bowler </span> = {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> name </span> = <span className="lightpurple">'{match.bowler}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> overs </span> = <span className="lightpurple">'{match.bowlerover}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> runs </span> = <span className="lightpurple">'{match.bowlerruns}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> wickets </span> = <span className="lightpurple">'{match.bowlerwickets}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br /><br />

          {/* Other Details */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="grey">
            &nbsp;&nbsp;&nbsp;&nbsp;//
            Other details &nbsp;
            <br />
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> other_info </span> = {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> partner_ship </span> = <span className="lightpurple">'{match.partnership}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> recent_balls </span> = <span className="lightpurple">'{match.recentballs}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> last_wicket </span> = <span className="lightpurple">'{match.lastwicket}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">let</span><span className="lightblue"> current_run_rate </span> = <span className="lightpurple">'{match.runrate}'</span>;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pink">return</span>{' {'} <span className="lightblue"> striker_end_batsman, bowler, other_info </span>{'}'};<br />

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />

          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="pink">script</span>&gt;<br />
          &lt;/<span className="pink">head</span>&gt;<br />
          &lt;<span className="pink">body</span>&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="pink">div</span>&nbsp;<span className="green">class</span><span className="pink">=</span><span className="yellow">"live-commentary"</span>{'>'}<br />
          <span className="grey">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Enjoy Commentary &nbsp;<br />
            {
              match.commentary.map((line) => (
                <div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className="pink">p</span>{'>'}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {line}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className="pink">p</span>{'>'}<br />
                </div>
              ))
            }
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="lightblue">// more at <a href="https://www.cricbuzz.com/">cricbuzz.</a></span>
            <br /></span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className="pink">div</span>{'>'}<br />
          &lt;/<span className="pink">body</span>&gt;<br />

          &lt;/<span className="pink">html</span>&gt;<br />
          <br />
          <span className="grey">
            &lt;!--
            Built with ❤️ by <a href="https://www.pankajtanwar.in/">Pankaj Tanwar</a>. Reach out to him at <a href="https://twitter.com/the2ndfloorguy">twitter!</a>
            --&gt;<br />
          </span>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <style jsx global>{`
            html,
            #container,
            body {
            width:100%;
            height:100%;
            background-color:#252526;
            margin:0px;
            padding:0px;
            }
            .editor {
            overflow-y: scroll;
            position:fixed;
            top:68px;
            left:372px;
            width:100%;
            height:100%;
            }
            #page {
            font-family: 'Source Code Pro', monospace;
            font-size: 14px;
            outline: none;
            z-index:0;
            width: calc(100% - 440px);
            max-height:100%;
            resize: none;
            outline-style: none;
            color: #f8f8f0;
            z-index: 2;
            position: absolute;
            left: 68px;
            }
            .lineNumbers {
            font-family: 'Source Code Pro', monospace;
            font-size: 14px;
            color:#a3a3a3;
            position: absolute;
            top: 0;
            text-align: right;
            left: 1px;
            background-color:#252526;
            }
            .purple {
            color: #ae81ff;
            }
            .pink {
            color: #f92672;
            }
            .yellow {
            color: #fff16e;
            }
            a {
            color: #e6db74;
            }
            a:visited {
            color: #fd971f;
            }
            .green {
            color: #b4ff1e;
            }
            .lightblue {
            color: #00ffff;
            }
            .lightpurple {
            color: #ff66f2;
            }
            .orange {
            color: #fd971f;
            }
            .white {
            color: #f8f8f0;
            }
            .grey {
            color: #929292;
            }
        `}</style>
    </div>
  )
}
