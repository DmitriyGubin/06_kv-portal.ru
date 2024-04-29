new Swiper('.swiper-containerr-interest', {
		  loop: true,
		  // Optional parameters
		  direction: 'horizontal',
		  // Navigation arrows
		  navigation: {
		    nextEl: '.interesting .swiper-button-prev-photo',
		    prevEl: '.interesting .swiper-button-next-photo',
		  },
		});

$(".this_phone").mask("+7(999) 999-9999");

/************************* Попап ************************/

/**Навешивание попапа на разные кнопки**********/
var elements = document.querySelectorAll('.excurs');
for (let item of elements)
{
	item.addEventListener("click", () => Show_PopUp_Order('Записаться на экскурсию'));
}

document.querySelector('#more-infoo').addEventListener("click", () => Show_PopUp_Order('Узнать подробнее'));

var elements = document.querySelectorAll('.workers .worker-item');
for (let item of elements)
{
    let path = item.querySelector('.manager-foto').src;
    let fio = item.querySelector('.manager-fio').innerHTML;

    var buttonn = item.querySelector('.contact');
    buttonn.addEventListener("click", function(){
        Show_PopUp_Manager(fio,path);
    });
}

$('.buttonn.get_vars').on('click', () => Show_PopUp_Order('Получить подборку'));
$('.call.buttonn').on('click', () => Show_PopUp_Order('Заказать звонок'));
$('#more_info_exch').on('click', () => Show_PopUp_Order('Узнать больше об обмене'));
$('#ipoteka_exch').on('click', () => Show_PopUp_Order('Обменять квартиру в ипотеке'));
$('.more_info_pop').on('click', () => Show_PopUp_Order('Узнать подробнее'));
$('#ipotrka-order').on('click', () => Show_PopUp_Order('Подать заявку'));
$('.more-info-ipoteka').on('click', () => Show_PopUp_Order('Узнать подробнее об ипотеке'));
/**Навешивание попапа на разные кнопки**********/

document.querySelector('#close').addEventListener("click", Hide_PopUp_Order);
document.querySelector('#for_close').addEventListener("click", Hide_PopUp_Order);

document.querySelector('#close_').addEventListener("click", Hide_Manager_Popup);
document.querySelector('#for_close_').addEventListener("click", Hide_Manager_Popup);

function Show_PopUp_Manager(fio,path)
{
   document.querySelector('.man-popup .fio').innerHTML = fio;
   document.querySelector('.man-popup .manager-foto').src = path;

    var close = document.querySelector('#close_');
    var form = document.querySelector('#form-content_');
    var succes = document.querySelector('#succes_order_');

    if(close.classList.contains('hide'))
    {
        close.classList.remove('hide');
    }

    if(form.classList.contains('hide'))
    {
        form.classList.remove('hide');
    }

    if(succes.classList.contains('show'))
    {
        succes.classList.remove('show');
    }

   document.querySelector('.man-popup').classList.add('show_pop_up_order');
}

function Show_PopUp_Order(popup_title)
{
	document.querySelector('#main-popup-title').innerHTML = popup_title;
	var close = document.querySelector('#close');
	var form = document.querySelector('#form-content');
	var succes = document.querySelector('#succes_order');

	if(close.classList.contains('hide'))
	{
		close.classList.remove('hide');
	}

	if(form.classList.contains('hide'))
	{
		form.classList.remove('hide');
	}

	if(succes.classList.contains('show'))
	{
		succes.classList.remove('show');
	}

	document.querySelector('.send_order').classList.add('show_pop_up_order');
}

function Hide_PopUp_Order()
{
	document.querySelector('.send_order').classList.remove('show_pop_up_order');
}

function Hide_Manager_Popup()
{
    document.querySelector('.man-popup').classList.remove('show_pop_up_order');
}

/****************Прослушиватели инпутов***********/
document.querySelector('#pop-up-name').addEventListener("input", () => Listen_Input('.univ_popup','.name-inp-box',false));
document.querySelector('#pop-up-phone').addEventListener("input", () => Listen_Input('.univ_popup','.phone-inp-box',true));

document.querySelector('#pop-up-name_').addEventListener("input", () => Listen_Input('.below-foto','.name-inp-box-man',false));
document.querySelector('#pop-up-phone_').addEventListener("input", () => Listen_Input('.below-foto','.phone-inp-box-man', true));

document.querySelector('#inp-name').addEventListener("input", () => Listen_Input('.quest_form_price','.name-inp-box', false));
document.querySelector('#inp-phone').addEventListener("input", () => Listen_Input('.quest_form_price','.phone-inp-box', true));

document.querySelector('#inp-phone-sticky').addEventListener("input", () => Listen_Input('.sticky_form','.phone-inp-box', true));

document.querySelector('#inp-name-trade').addEventListener("input", () => Listen_Input('.trade_form','.name-inp-box', false));
document.querySelector('#inp-phone-trade').addEventListener("input", () => Listen_Input('.trade_form','.phone-inp-box', true));

document.querySelector('#inp-name-quest').addEventListener("input", () => Listen_Input('.form_quest','.name-inp-box', false));
document.querySelector('#inp-phone-quest').addEventListener("input", () => Listen_Input('.form_quest','.phone-inp-box', true));

document.querySelector('#inp-name-moth').addEventListener("input", () => Listen_Input('.form_moth','.name-inp-box', false));
document.querySelector('#inp-phone-moth').addEventListener("input", () => Listen_Input('.form_moth','.phone-inp-box', true));

document.querySelector('#calc-phone').addEventListener("input", () => Listen_Input('.calc-order','.phone-inp-box', true));

document.querySelector('#inp-name-ip').addEventListener("input", () => Listen_Input('.lower-form','.name-inp-box', false));
document.querySelector('#inp-phone-ip').addEventListener("input", () => Listen_Input('.lower-form','.phone-inp-box', true));

function Listen_Input(form_name, box_name, phone_or_not)
{
    var succes = document.querySelector(form_name +' '+ box_name + ' .succes_var');
    var error = document.querySelector(form_name +' '+ box_name + ' .error_var');
    var inp = document.querySelector(form_name +' '+ box_name + ' input');

    var bool;
    if(phone_or_not)
    {
        bool = ((inp.value).length != 16);
    }
    else 
    {
        bool = (inp.value == '');
    }

    if(bool)
    {
        error.classList.add('show');
        succes.classList.remove('show');
        inp.classList.add('hasError');
    }
    else
    {
        error.classList.remove('show');
        succes.classList.add('show');
        inp.classList.remove('hasError');
    }
}

/****************Прослушиватели инпутов***********/


/**************Отправка форм**************/

$("#for_send").on("click",() => Send_Order(event,'.univ_popup'));

$("#for_send_").on("click",() => Send_Order(event,'.below-foto'));

$("#for_send_form").on("click",() => Send_Order(event,'.quest_form_price'));

$("#for_send_sticky_form").on("click",() => Send_Order(event,'.sticky_form'));

$("#for_send_trade").on("click",() => Send_Order(event,'.trade_form'));

$("#for_send_quest").on("click",() => Send_Order(event,'.form_quest'));

$("#for_send_moth").on("click",() => Send_Order(event,'.form_moth'));

$("#send-order-calculator").on("click",() => Send_Order(event,'.calc-order'));

$("#for_send_ip").on("click",() => Send_Order(event,'.lower-form'));

function Validate(form_selector)
{
    var err=0;

    var inps_box = document.querySelectorAll(form_selector + ' .required');

    for (let item of inps_box)
    {
       let inp = item.querySelector('input');
       let error = item.querySelector('.error_var');

       var bool;

        if(inp.classList.contains('this_phone'))
        {
            bool = ((inp.value).length != 16);
        }
        else 
        {
            bool = (inp.value == '');
        }

        if (bool)
        {
            err++;
            $(inp).addClass("hasError");
            $(error).addClass("show");
        } 
        else 
        {
            $(inp).removeClass("hasError");
            $(error).removeClass("show");
        }
    }

    return err;
}

function Send_Order(event,form_selector)
{
    event.preventDefault();
    var err = Validate(form_selector);

    if (err == 0)
    {
        var form = document.querySelector(form_selector);
        form.reset();

        //Ajax, заглушка

        if(form.classList.contains('popup'))
        {
            $("#close").addClass("hide");
            $("#form-content").addClass("hide");
            $("#succes_order").addClass("show");
        }
        else if(form.classList.contains('popup_man'))
        {
            $("#close_").addClass("hide");
            $("#form-content_").addClass("hide");
            $("#succes_order_").addClass("show");
        }
        else if(form.classList.contains('univ_form'))
        {
            Show_PopUp_Order();
            $("#close").addClass("hide");
            $("#form-content").addClass("hide");
            $("#succes_order").addClass("show");
        }

        $(form_selector + ' .succes_var').removeClass("show");
    }
}

/**************Отправка форм**************/

Switch('.popular .var-item', 'active-but');

function Switch(selector, modify_class)
{
    var elements = document.querySelectorAll(selector);
    for(let item of elements)
    {
       item.addEventListener("click", function(){

            if(item.classList.contains(modify_class))
            {
                item.classList.remove(modify_class);
            }
            else
            {
                item.classList.add(modify_class);
            }

           });
    }
}

document.querySelector(".headd .object").addEventListener('click', Select_Box);

function Select_Box()
{
    document.querySelector(".headd .var-box").classList.toggle('show');
    document.querySelector(".headd .object svg").classList.toggle('rotate-in');
    document.querySelector(".headd .object svg").classList.toggle('rotate-out');
}

var elements = document.querySelectorAll(".headd .var-box div");
for (let item of elements)
{
    let name = item.innerHTML;
    item.addEventListener('click', function(){
        document.querySelector(".headd #selectedd").innerHTML = name;
    });
}

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map-box", {
        center: [54.970000,82.925550],
        zoom: 9,
                //controls: [],//без элементов управления
            }, {
                searchControlProvider: 'yandex#search'
            }),
    // Создание макета содержимого хинта.
    // Макет создается через фабрику макетов с помощью текстового шаблона.
    HintLayout = ymaps.templateLayoutFactory.createClass( "<div class='my-hint'>" +
        "{{ properties.address }}" +
        "</div>", {
                // Определяем метод getShape, который
                // будет возвращать размеры макета хинта.
                // Это необходимо для того, чтобы хинт автоматически
                // сдвигал позицию при выходе за пределы карты.
                getShape: function () {
                    var el = this.getElement(),
                    result = null;
                    if (el) {
                        var firstChild = el.firstChild;
                        result = new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                                ])
                            );
                    }
                    return result;
                }
            }
            );


    function Add_point(x, y, adress)
    {
        var myPlacemark = new ymaps.Placemark([x, y], {
        address: adress
        // object: "Центр современного искусства"
        }, {
            hintLayout: HintLayout
        });

        myMap.geoObjects.add(myPlacemark);
        //myPlacemark.hint.open([Number(x), Number(y)]);

        //myPlacemark.balloon.open([55.65,37.7], "Содержимое балуна", { closeButton: true });
    }

     Add_point(54.970000,82.925550, 'Тест');
 }

/**табы**/
var elements = document.querySelectorAll('.quest .quest-box');
for (let item of elements)
{
    item.querySelector('.arrow').addEventListener("click", function(){
        var short = item.querySelector('.short');
        var long = item.querySelector('.long');
        var arrow = item.querySelector('.quest .arrow img');

        if(long.classList.contains('hide'))
        {
            short.classList.add('hide');
            long.classList.remove('hide');
            arrow.classList.add('rotate-in');
            arrow.classList.remove('rotate-out');
        }
        else if(short.classList.contains('hide'))
        {
            long.classList.add('hide');
            short.classList.remove('hide');
            arrow.classList.add('rotate-out');
            arrow.classList.remove('rotate-in');
        }
    });
}
/**табы**/

/**показать больше**/
var elements = document.querySelectorAll('.quest .quest-box');
var num_records = 3;/*количество отображаемых записей*/
document.querySelector('#more-info').addEventListener("click", function(){
    var num = 0;
    for (let item of elements)
    {
        if((item.classList.contains('hide')) && (num < num_records))
        {
            item.classList.remove('hide');
            num++;
        }
    }
    if (num == 0)
    {
        document.querySelector('#more-info').remove();
    }
});
/**показать больше**/

Scroll_to_element('#calc-order');
Show_All_Items(2, '.ipoteka-programs', '.ipoteka-programs .ipoteka-line', 'hide');

// Делим на разряды инпуты 
var inp_realty_price = document.querySelector("#realty-price");
var inp_first_money = document.querySelector("#first-money");
 
inp_realty_price.value = new Intl.NumberFormat("ru").format(inp_realty_price.value);
inp_first_money.value = new Intl.NumberFormat("ru").format(inp_first_money.value);
 
inp_realty_price.addEventListener('input', Digit_Divider);
inp_first_money.addEventListener('input', Digit_Divider);

// Делим на разряды инпуты

/***калькулятор ипотеки**/
var inp_price = document.querySelector("#realty-price");
var inp_vznos = document.querySelector("#first-money");
var inp_time = document.querySelector("#credit-years");
var inp_percent = document.querySelector("#percent");
funcQuery(inp_price.value,inp_vznos.value,inp_time.value,inp_percent.value);

inp_price.addEventListener('input', function (){
    funcQuery(inp_price.value,inp_vznos.value,inp_time.value,inp_percent.value);
});

inp_vznos.addEventListener('input', function (){
    funcQuery(inp_price.value,inp_vznos.value,inp_time.value,inp_percent.value);
});

inp_time.addEventListener('input', function (){
    funcQuery(inp_price.value,inp_vznos.value,inp_time.value,inp_percent.value);
});

inp_percent.addEventListener('input', function (){
    funcQuery(inp_price.value,inp_vznos.value,inp_time.value,inp_percent.value);
});
/***калькулятор ипотеки**/

function Digit_Divider()
{
  var save_position = this.selectionStart;
  var filter_value = this.value.replace(/[^0-9]/g, '');
  if (filter_value == '')
  {
    this.value = '';
  }
  else
  {
    this.value = new Intl.NumberFormat("ru").format(filter_value);
  }
  
  if (save_position == this.value.length-1)
  {
    save_position++;
  }
  this.setSelectionRange(save_position,save_position);
}

function funcQuery(price,vznos,time,percent)
{
  price = price.replace(/\s/g, '');
  price = Number(price);

  vznos = vznos.replace(/\s/g, '');
  vznos = Number(vznos);

  time = Number(time);
  percent = Number(percent);

  var monthly_payment = document.querySelector("#monthly-payment");
  var total_sum = document.querySelector("#total_sum");
  var percent_sum = document.querySelector("#percent-summ");
  var min_salary = document.querySelector("#min-salary");

  if (price == '' || vznos == '' || time == '' || percent == '')
  {
    monthly_payment.innerHTML = '';
    total_sum.innerHTML = '';
    percent_sum.innerHTML = '';
    min_salary.innerHTML = '';
  }
  else
  {
    var payment = Math.round(calculate_ipoteka_payment(price,vznos,time,percent));
    var all_money = Math.round(calculate_total_sum(price,vznos,time,percent));
    var overpayment = Math.round(calculate_overpayment(price,vznos,time,percent));
    var salary = Math.round(calculate_min_salary(price,vznos,time,percent));
    
    Input_Money_Field(payment, monthly_payment);
    Input_Money_Field(all_money, total_sum);
    Input_Money_Field(overpayment, percent_sum);
    Input_Money_Field(salary, min_salary);
  }
}

function Input_Money_Field(calc_result,money_field_ref)
{
  if(calc_result < 0)
  {
    money_field_ref.innerHTML = '';
  }
  else
  {
    calc_result = new Intl.NumberFormat("ru").format(calc_result);
    calc_result = calc_result + " ₽";
    money_field_ref.innerHTML = calc_result;
  }   
}

function calculate_ipoteka_payment(price,initial_fee,time,percent)//ежемесячный платёж
{ 
  time = time*12; //Срок ипотеки в месяцах
  interest_rate = percent / 12 /100; //Месячная процентная ставка
  total_rate = (1 + interest_rate) ** time; //Общая ставка
  monthly_payment = (price - initial_fee) * interest_rate * total_rate / (total_rate - 1);//Ежемесячный платеж
  //return Math.round(monthly_payment);
  //return monthly_payment.toFixed(2);
  return monthly_payment;
}

function calculate_total_sum(price,initial_fee,time,percent)//Полная сумма к погашению
{
  var all_money = calculate_ipoteka_payment(price,initial_fee,time,percent)*time*12;
  //return Math.round(all_money);
  //return all_money.toFixed(2);
  return all_money;
}

function calculate_overpayment(price,initial_fee,time,percent)//переплата по ипотеке
{
  var result = calculate_total_sum(price,initial_fee,time,percent) - (price - initial_fee);
  //return Math.round(result);
  //return result.toFixed(2);
  return result;
}

function calculate_min_salary(price,initial_fee,time,percent)
{
  var living_wage = 16054;//прожиточный минимум
  var payment = Number(calculate_ipoteka_payment(price,initial_fee,time,percent));
  if(payment <= living_wage)
  {
    result = payment + living_wage;
  }
  else
  {
    result = 2*payment;
  }
  
  return result;
}

function Show_All_Items(number_initially_visible, selector_button_parent, selector_item, hide_class)
{
    var ipoteka_programs = document.querySelectorAll(selector_item);
    var amount = ipoteka_programs.length;
    if(amount != 0)
    {
        if (amount  > number_initially_visible)
        {
            var j = 0;
            for (let item of ipoteka_programs)
            {
                j++;
                if(j > number_initially_visible)
                {
                    item.classList.add(hide_class);
                }
            }

            var parent = document.querySelector(selector_button_parent);
            let button = document.createElement('button');
            button.classList.add('buttonn');
            button.id = 'all-ipoteka-programs';
            button.innerHTML = 'СМОТРЕТЬ ВСЕ ПРОГРАММЫ';
            parent.appendChild(button);

            button.addEventListener('click', function (){
                for (let item of ipoteka_programs)
                {
                    item.classList.remove(hide_class);
                }
                button.remove();
            });
        }
    }
}

function Scroll_to_element(selector)
{
    var smoothLink = document.querySelector(selector);

    smoothLink.addEventListener('click', function (e) 
        {
            e.preventDefault();
            var id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
}

