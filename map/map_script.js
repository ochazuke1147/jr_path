var map;
var marker;
var center = {
    lat: 35.170694, // �ܓx
    lng: 136.881637 // �o�x
};

function initMap() {
    map = new google.maps.Map(document.getElementById('sample'), {
        center: center, // �n�}�̒��S���w��
        zoom: 6 // �n�}�̃Y�[�����w��
    });
// path�̃��C���ݒ�
    var path_line = new google.maps.Polyline({
        map: map,
        path:[
// ����
            new google.maps.LatLng(38.2202371,139.4636089),
// �V���c
            new google.maps.LatLng(37.9440569,139.3350935),
// �V��
            new google.maps.LatLng(37.8004686,139.1212473),
// ���O��
            new google.maps.LatLng(37.6285143,138.9736524),
// �{��
            new google.maps.LatLng(37.4220999,138.8402313),
// ����
            new google.maps.LatLng(37.3637096,138.5562887),
// �g�c
            new google.maps.LatLng(37.6871131,138.8786033),
// �V��
            new google.maps.LatLng(37.91209,139.0617442),
// �V���c
            new google.maps.LatLng(37.9440569,139.3350935),
        ],
        strokeColor: "rgb(0 ,51,204)", //���F(def:#000000)
        strokeOpacity: 0.5, //�����x0�`1(def:1)
        strokeWeight: 5, //px�w��idef:1)
        zIndex: 1 //�d�Ȃ菇
        }
    );
// �w�̃}�[�J�[�ݒ�
    var markers = [
// ����
        {
            position : { lat: 38.2202371, lng: 139.4636089 },
            title: "����",
            label_text: "0",
            color: "blue"
        },
// �V���c
        {
            position : { lat: 37.9440569, lng: 139.3350935 },
            title: "�V���c",
            label_text: "1",
            color: "blue"
        },
// �V��
        {
            position : { lat: 37.8004686, lng: 139.1212473 },
            title: "�V��",
            label_text: "2",
            color: "blue"
        },
// ���O��
        {
            position : { lat: 37.6285143, lng: 138.9736524 },
            title: "���O��",
            label_text: "3",
            color: "blue"
        },
// �{��
        {
            position : { lat: 37.4220999, lng: 138.8402313 },
            title: "�{��",
            label_text: "4",
            color: "blue"
        },
// ����
        {
            position : { lat: 37.3637096, lng: 138.5562887 },
            title: "����",
            label_text: "5",
            color: "blue"
        },
// �g�c
        {
            position : { lat: 37.6871131, lng: 138.8786033 },
            title: "�g�c",
            label_text: "6",
            color: "blue"
        },
// �V��
        {
            position : { lat: 37.91209, lng: 139.0617442 },
            title: "�V��",
            label_text: "7",
            color: "blue"
        },
// �V���c
        {
            position : { lat: 37.9440569, lng: 139.3350935 },
            title: "�V���c",
            label_text: "8",
            color: "blue"
        },
    ];
// �����̃}�[�J�[��z�u
    for (var m of markers){
        var marker = new google.maps.Marker({
            map: map,
            position: m.position,
            icon: {
                fillColor: m.color, //�h��ׂ��F
                fillOpacity: 0.8, //�h��ׂ����ߗ�
                path: google.maps.SymbolPath.CIRCLE, //�~���w��
                scale: 16, //�~�̃T�C�Y
                strokeColor: m.color, //�g�̐F
                strokeWeight: 1.0 //�g�̓��ߗ�
            },
            title: m.title,
            label: {
                text: m.label_text, //���x������
                color: '#FFFFFF', //�����̐F
                fontSize: '20px' //�����̃T�C�Y
            }
        });
    }
}
