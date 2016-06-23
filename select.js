// <script type="text/javascript">
      $(document).ready(function() {

        $( "#vijaccordion" ).accordion({
          collapsible: true,
          active: false
        });

        function vcomfn() {
          ganvaramclick();
          ibrihimclick();
          kankiclick();
          onetownclick();
          twotownclick();
          governerclick();
          suryaraoclick();
          snclick();
          kslankaclick();
          machavaramclick();
          patamataclick();
          nunnaclick();
          pamidimukkalaclick();
          penamuluruclick();
          thotlavalluruclick();
          vuyyurururalclick();
          vuyyuruclick();
          unguturuclick();
          ajithsinghnagarclick();
          bhavanipuramclick();
        }
       
        $("#vcallid").click(function() {
          if($('#vcallidlab').is('.is-checked')) {
            $('.vccblab').each(function(){
                    this.MaterialCheckbox.uncheck();
                });
            //add 20 call functions
            vcomfn();
        }
        else {
          if (ganvarammarker != null)  clearganvarammarker();
          if (ibrivar != null) clearibrihim();
          if (kanki != null) clearkanki();
          if (onetown != null)  clearonetown();
          if (twotown != null) cleartwotown();
          if (governervar != null) cleargoverner();
          if (srpet != null)  clearsrpet();
          if (snpur != null) clearsnpuram();
          if (kslankavar != null) clearkslanka();
          if (machavaramvar != null)  clearmachavaram();
          if (patamarvar != null) clearpatamata();
          if (nunnavar != null) clearnunna();
          if (pamidivar != null)  clearpamidimukkala();
          if (penamuluruvar != null) clearpenamuluru();
          if (thotavallurvar != null) clearthotavallur();
          if (vuyyurtownvar != null)  clearvuyyurtown();
          if (vuyyurururalvar != null) clearvuyyurrural();
          if (unguturuvar != null) clearunguturu();
          if (ajithsinghnagarvar != null)  clearajithsinghnagar();
          if (bhavanivar != null) clearbhavanipuram();
         $('.vccblab').each(function(){
                    this.MaterialCheckbox.check();
                });
          vcomfn();
        }

      });

        $('.vccb').on('click',function(){
            if($('.vccb:checked').length == $('.vccb').length){
                document.querySelector('#vcallidlab').MaterialCheckbox.check();
            }else{
                document.querySelector('#vcallidlab').MaterialCheckbox.uncheck();
            }

        });
        $( "#camaccord" ).accordion({
          collapsible: true,
          active: false
        });

        function camfn() {
          // clearcameras();
          // clearbluecameras();
          // cleargreencameras();
          // if (!$('#cameracheckbox').is('.is-checked')) {
            cameracheck();  
          // }          
          // if !($('#camerabluecheckbox').is('.is-checked')) {
            camerabluecheck();
          // }
          // if !($('#cameragreencheckbox').is('.is-checked')) {
            cameragreencheck();
          // }
        }

        $("#camallid").click(function() {
          
          if($('#camlab').is('.is-checked')) {
            $('.camcbl').each(function(){
                    this.MaterialCheckbox.uncheck();
                });
          camfn();
        }
        else {
            if (ctabluelayer != null)  clearbluecameras();
           if (ctagreenlayer != null) cleargreencameras();
           if (ctaLayer != null) clearcameras();
          $('.camcbl').each(function(){
                    this.MaterialCheckbox.check();
                });
          camfn();
        }

      });

        $('.camcb').on('click',function(){
            if($('.camcb:checked').length == $('.camcb').length){
                document.querySelector('#camlab').MaterialCheckbox.check();
            }else{
                document.querySelector('#camlab').MaterialCheckbox.uncheck();
            }
        });
          
      });

      function openNav() {
          document.getElementById("wmenu").style.width = "200px";
      }

      function closeNav() {
          document.getElementById("wmenu").style.width = "0";
      }

      function openRight() {
          document.getElementById("right-panel").style.width = "250px";
      }

     
      // </script>