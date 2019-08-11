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
// ���]��
            new google.maps.LatLng(37.1702506,138.242039),
// ����
            new google.maps.LatLng(37.3637096,138.5562887),
// �g�c
            new google.maps.LatLng(37.6871131,138.8786033),
// �V��
            new google.maps.LatLng(37.91209,139.0617442),
// �V���c
            new google.maps.LatLng(37.9440569,139.3350935),
// �V��
            new google.maps.LatLng(37.8004686,139.1212473),
// ���O��
            new google.maps.LatLng(37.6285143,138.9736524),
// �{��
            new google.maps.LatLng(37.4220999,138.8402313),
// �a��
            new google.maps.LatLng(36.4913158,139.0088),
// �V�O��
            new google.maps.LatLng(36.379033,139.0469116),
// ���R
            new google.maps.LatLng(36.3128947,139.8064972),
// ��{
            new google.maps.LatLng(35.9063453,139.6231198),
// �q��
            new google.maps.LatLng(35.7210899,139.343634),
// ����
            new google.maps.LatLng(35.6982051,139.4137788),
// �{���{��
            new google.maps.LatLng(35.6661875,139.4772291),
// ��������
            new google.maps.LatLng(35.6997996,139.4657707),
// �V�h
            new google.maps.LatLng(35.6894597,139.700537),
// �r��
            new google.maps.LatLng(35.729487,139.7109997),
// �c�[
            new google.maps.LatLng(35.7383571,139.7607333),
// �ԉH
            new google.maps.LatLng(35.7776795,139.7209883),
// �����Y�a
            new google.maps.LatLng(35.845352,139.6468681),
// ��Y�a
            new google.maps.LatLng(35.8481784,139.6687818),
// �V����
            new google.maps.LatLng(35.8255382,139.9211025),
// ���闢
            new google.maps.LatLng(35.7281575,139.770638),
// �H�t��
            new google.maps.LatLng(35.698362,139.7733021),
// �ю���
            new google.maps.LatLng(35.6971445,139.81384),
// ���D��
            new google.maps.LatLng(35.7074664,139.9590826),
// ��t
            new google.maps.LatLng(35.6129299,140.1134652),
// ���q
            new google.maps.LatLng(35.7095572,140.2259731),
// ���c
            new google.maps.LatLng(35.7773313,140.3135312),
// ����
            new google.maps.LatLng(35.8979327,140.5322812),
// ����
            new google.maps.LatLng(35.7395434,140.7952883),
// ����
            new google.maps.LatLng(35.6083855,140.4108524),
// ���
            new google.maps.LatLng(35.522508,140.3110421),
// ���(�O�[�E���[��)
            new google.maps.LatLng(35.522508,140.3110421),
// �h��(�O�[�E���[��)
            new google.maps.LatLng(35.5815282,140.1310471),
// �h��
            new google.maps.LatLng(35.5815282,140.1310471),
// ��D��
            new google.maps.LatLng(35.6817774,139.9958289),
// �s�쉖�l
            new google.maps.LatLng(35.6664838,139.9236774),
// ����
            new google.maps.LatLng(35.6811957,139.767251),
// �_�c
            new google.maps.LatLng(35.6918216,139.770935),
// �䒃�m��
            new google.maps.LatLng(35.6994603,139.7652079),
// ��X��
            new google.maps.LatLng(35.6841068,139.7021759),
// �i��
            new google.maps.LatLng(35.6284888,139.7387767),
// ���
            new google.maps.LatLng(35.5313531,139.6968913),
// �K��
            new google.maps.LatLng(35.5315627,139.6842527),
// ��������
            new google.maps.LatLng(35.5766373,139.6594584),
// �ߌ�
            new google.maps.LatLng(35.5082528,139.6763195),
// ���_�ސ�
            new google.maps.LatLng(35.4779787,139.6333869),
// ���l
            new google.maps.LatLng(35.4657885,139.6223299),
// ���l(���ݐ�)
            new google.maps.LatLng(35.4657885,139.6223299),
// ��D(���ݐ�)
            new google.maps.LatLng(35.3544937,139.5315814),
// ��D
            new google.maps.LatLng(35.3544937,139.5315814),
// ������
            new google.maps.LatLng(35.3303085,139.406848),
// ���{
            new google.maps.LatLng(35.5949215,139.3450528),
// �����q
            new google.maps.LatLng(35.6556399,139.3388915),
// �b�{
            new google.maps.LatLng(35.6670765,138.5690546),
// �x�m
            new google.maps.LatLng(35.151486,138.6511946),
// �L��
            new google.maps.LatLng(34.7629304,137.381926),
// �C��
            new google.maps.LatLng(35.9845957,137.9978725),
// ���J
            new google.maps.LatLng(36.0570347,138.0453799),
// ���K
            new google.maps.LatLng(36.1143387,137.9481023),
// ���R
            new google.maps.LatLng(35.1429282,136.9012195),
// ���É�
            new google.maps.LatLng(35.1709142,136.8816447),
// ��_
            new google.maps.LatLng(35.3669998,136.6175494),
// �Č�
            new google.maps.LatLng(35.3145999,136.2905717),
// ����
            new google.maps.LatLng(35.0228832,135.9622036),
// �R��
            new google.maps.LatLng(34.992343,135.8173204),
// �ߍ]����
            new google.maps.LatLng(35.5383377,136.1514616),
// ����
            new google.maps.LatLng(35.3021433,135.2518621),
// ���s
            new google.maps.LatLng(34.9858294,135.7589033),
// �ؒ�
            new google.maps.LatLng(34.7359383,135.8248179),
// ���o
            new google.maps.LatLng(34.6880334,135.5630922),
// �v��
            new google.maps.LatLng(34.6224548,135.5842199),
// ����
            new google.maps.LatLng(34.5977198,135.7025349),
// �ޗ�
            new google.maps.LatLng(34.6809044,135.8189335),
// ���c
            new google.maps.LatLng(34.5163234,135.7447341),
// �a�̎R
            new google.maps.LatLng(34.2319356,135.1911771),
// ������
            new google.maps.LatLng(34.3901649,135.3306787),
// �P
            new google.maps.LatLng(34.5319888,135.4588616),
// �V����
            new google.maps.LatLng(34.6473099,135.5138727),
// ���{
            new google.maps.LatLng(34.6541072,135.4927889),
// �����
            new google.maps.LatLng(34.68215,135.4661438),
// ���
            new google.maps.LatLng(34.7024849,135.4959506),
// �V���
            new google.maps.LatLng(34.7331669,135.5002139),
// ����
            new google.maps.LatLng(34.6927724,135.545139),
// ����
            new google.maps.LatLng(34.6965674,135.5341349),
// ���
            new google.maps.LatLng(34.7318259,135.4316693),
// �J��
            new google.maps.LatLng(35.0823226,135.0501144),
// ���Ð�
            new google.maps.LatLng(34.7676372,134.8393645),
// �P�H
            new google.maps.LatLng(34.8266323,134.6898735),
// ����
            new google.maps.LatLng(34.8179561,134.4741181),
// ����(�R�z�{��)
            new google.maps.LatLng(34.8179561,134.4741181),
// �����R(�R�z�{��)
            new google.maps.LatLng(34.6856481,133.9881796),
// �����R
            new google.maps.LatLng(34.6856481,133.9881796),
// ���R
            new google.maps.LatLng(34.6664023,133.9186461),
// �q�~
            new google.maps.LatLng(34.6020202,133.7657547),
// ���R
            new google.maps.LatLng(34.4892415,133.3614224),
// �O��
            new google.maps.LatLng(34.4005593,133.0831419),
// �O��(����)
            new google.maps.LatLng(34.4005593,133.0831419),
// �C�c�s(����)
            new google.maps.LatLng(34.3720353,132.530533),
// �C�c�s
            new google.maps.LatLng(34.3720353,132.530533),
// ����
            new google.maps.LatLng(34.4099757,132.4505616),
// �V�R��
            new google.maps.LatLng(34.0937855,131.3963492),
// �F��
            new google.maps.LatLng(34.0030269,131.2217245),
// ���\
            new google.maps.LatLng(33.9665412,131.2280182),
// ���c
            new google.maps.LatLng(33.9606253,131.1868828),
// ����c
            new google.maps.LatLng(34.0078127,131.1855495),
// ����
            new google.maps.LatLng(33.9505769,130.9221012),
        ],
        strokeColor: "rgb(0 ,51,204)", //���F(def:#000000)
        strokeOpacity: 0.5, //�����x0�`1(def:1)
        strokeWeight: 5, //px�w��idef:1)
        zIndex: 1 //�d�Ȃ菇
        }
    );
// �w�̃}�[�J�[�ݒ�
    var markers = [
// ���]��
        {
            position : { lat: 37.1702506, lng: 138.242039 },
            title: "���]��",
            label_text: "0",
            color: "blue"
        },
// ����
        {
            position : { lat: 37.3637096, lng: 138.5562887 },
            title: "����",
            label_text: "1",
            color: "blue"
        },
// �g�c
        {
            position : { lat: 37.6871131, lng: 138.8786033 },
            title: "�g�c",
            label_text: "2",
            color: "blue"
        },
// �V��
        {
            position : { lat: 37.91209, lng: 139.0617442 },
            title: "�V��",
            label_text: "3",
            color: "blue"
        },
// �V���c
        {
            position : { lat: 37.9440569, lng: 139.3350935 },
            title: "�V���c",
            label_text: "4",
            color: "blue"
        },
// �V��
        {
            position : { lat: 37.8004686, lng: 139.1212473 },
            title: "�V��",
            label_text: "5",
            color: "blue"
        },
// ���O��
        {
            position : { lat: 37.6285143, lng: 138.9736524 },
            title: "���O��",
            label_text: "6",
            color: "blue"
        },
// �{��
        {
            position : { lat: 37.4220999, lng: 138.8402313 },
            title: "�{��",
            label_text: "7",
            color: "blue"
        },
// �a��
        {
            position : { lat: 36.4913158, lng: 139.0088 },
            title: "�a��",
            label_text: "8",
            color: "blue"
        },
// �V�O��
        {
            position : { lat: 36.379033, lng: 139.0469116 },
            title: "�V�O��",
            label_text: "9",
            color: "blue"
        },
// ���R
        {
            position : { lat: 36.3128947, lng: 139.8064972 },
            title: "���R",
            label_text: "10",
            color: "blue"
        },
// ��{
        {
            position : { lat: 35.9063453, lng: 139.6231198 },
            title: "��{",
            label_text: "11",
            color: "blue"
        },
// �q��
        {
            position : { lat: 35.7210899, lng: 139.343634 },
            title: "�q��",
            label_text: "12",
            color: "blue"
        },
// ����
        {
            position : { lat: 35.6982051, lng: 139.4137788 },
            title: "����",
            label_text: "13",
            color: "blue"
        },
// �{���{��
        {
            position : { lat: 35.6661875, lng: 139.4772291 },
            title: "�{���{��",
            label_text: "14",
            color: "blue"
        },
// ��������
        {
            position : { lat: 35.6997996, lng: 139.4657707 },
            title: "��������",
            label_text: "15",
            color: "blue"
        },
// �V�h
        {
            position : { lat: 35.6894597, lng: 139.700537 },
            title: "�V�h",
            label_text: "16",
            color: "blue"
        },
// �r��
        {
            position : { lat: 35.729487, lng: 139.7109997 },
            title: "�r��",
            label_text: "17",
            color: "blue"
        },
// �c�[
        {
            position : { lat: 35.7383571, lng: 139.7607333 },
            title: "�c�[",
            label_text: "18",
            color: "blue"
        },
// �ԉH
        {
            position : { lat: 35.7776795, lng: 139.7209883 },
            title: "�ԉH",
            label_text: "19",
            color: "blue"
        },
// �����Y�a
        {
            position : { lat: 35.845352, lng: 139.6468681 },
            title: "�����Y�a",
            label_text: "20",
            color: "blue"
        },
// ��Y�a
        {
            position : { lat: 35.8481784, lng: 139.6687818 },
            title: "��Y�a",
            label_text: "21",
            color: "blue"
        },
// �V����
        {
            position : { lat: 35.8255382, lng: 139.9211025 },
            title: "�V����",
            label_text: "22",
            color: "blue"
        },
// ���闢
        {
            position : { lat: 35.7281575, lng: 139.770638 },
            title: "���闢",
            label_text: "23",
            color: "blue"
        },
// �H�t��
        {
            position : { lat: 35.698362, lng: 139.7733021 },
            title: "�H�t��",
            label_text: "24",
            color: "blue"
        },
// �ю���
        {
            position : { lat: 35.6971445, lng: 139.81384 },
            title: "�ю���",
            label_text: "25",
            color: "blue"
        },
// ���D��
        {
            position : { lat: 35.7074664, lng: 139.9590826 },
            title: "���D��",
            label_text: "26",
            color: "blue"
        },
// ��t
        {
            position : { lat: 35.6129299, lng: 140.1134652 },
            title: "��t",
            label_text: "27",
            color: "blue"
        },
// ���q
        {
            position : { lat: 35.7095572, lng: 140.2259731 },
            title: "���q",
            label_text: "28",
            color: "blue"
        },
// ���c
        {
            position : { lat: 35.7773313, lng: 140.3135312 },
            title: "���c",
            label_text: "29",
            color: "blue"
        },
// ����
        {
            position : { lat: 35.8979327, lng: 140.5322812 },
            title: "����",
            label_text: "30",
            color: "blue"
        },
// ����
        {
            position : { lat: 35.7395434, lng: 140.7952883 },
            title: "����",
            label_text: "31",
            color: "blue"
        },
// ����
        {
            position : { lat: 35.6083855, lng: 140.4108524 },
            title: "����",
            label_text: "32",
            color: "blue"
        },
// ���
        {
            position : { lat: 35.522508, lng: 140.3110421 },
            title: "���",
            label_text: "33",
            color: "blue"
        },
// ���(�O�[�E���[��)
        {
            position : { lat: 35.522508, lng: 140.3110421 },
            title: "���(�O�[�E���[��)",
            label_text: "34",
            color: "blue"
        },
// �h��(�O�[�E���[��)
        {
            position : { lat: 35.5815282, lng: 140.1310471 },
            title: "�h��(�O�[�E���[��)",
            label_text: "35",
            color: "blue"
        },
// �h��
        {
            position : { lat: 35.5815282, lng: 140.1310471 },
            title: "�h��",
            label_text: "36",
            color: "blue"
        },
// ��D��
        {
            position : { lat: 35.6817774, lng: 139.9958289 },
            title: "��D��",
            label_text: "37",
            color: "blue"
        },
// �s�쉖�l
        {
            position : { lat: 35.6664838, lng: 139.9236774 },
            title: "�s�쉖�l",
            label_text: "38",
            color: "blue"
        },
// ����
        {
            position : { lat: 35.6811957, lng: 139.767251 },
            title: "����",
            label_text: "39",
            color: "blue"
        },
// �_�c
        {
            position : { lat: 35.6918216, lng: 139.770935 },
            title: "�_�c",
            label_text: "40",
            color: "blue"
        },
// �䒃�m��
        {
            position : { lat: 35.6994603, lng: 139.7652079 },
            title: "�䒃�m��",
            label_text: "41",
            color: "blue"
        },
// ��X��
        {
            position : { lat: 35.6841068, lng: 139.7021759 },
            title: "��X��",
            label_text: "42",
            color: "blue"
        },
// �i��
        {
            position : { lat: 35.6284888, lng: 139.7387767 },
            title: "�i��",
            label_text: "43",
            color: "blue"
        },
// ���
        {
            position : { lat: 35.5313531, lng: 139.6968913 },
            title: "���",
            label_text: "44",
            color: "blue"
        },
// �K��
        {
            position : { lat: 35.5315627, lng: 139.6842527 },
            title: "�K��",
            label_text: "45",
            color: "blue"
        },
// ��������
        {
            position : { lat: 35.5766373, lng: 139.6594584 },
            title: "��������",
            label_text: "46",
            color: "blue"
        },
// �ߌ�
        {
            position : { lat: 35.5082528, lng: 139.6763195 },
            title: "�ߌ�",
            label_text: "47",
            color: "blue"
        },
// ���_�ސ�
        {
            position : { lat: 35.4779787, lng: 139.6333869 },
            title: "���_�ސ�",
            label_text: "48",
            color: "blue"
        },
// ���l
        {
            position : { lat: 35.4657885, lng: 139.6223299 },
            title: "���l",
            label_text: "49",
            color: "blue"
        },
// ���l(���ݐ�)
        {
            position : { lat: 35.4657885, lng: 139.6223299 },
            title: "���l(���ݐ�)",
            label_text: "50",
            color: "blue"
        },
// ��D(���ݐ�)
        {
            position : { lat: 35.3544937, lng: 139.5315814 },
            title: "��D(���ݐ�)",
            label_text: "51",
            color: "blue"
        },
// ��D
        {
            position : { lat: 35.3544937, lng: 139.5315814 },
            title: "��D",
            label_text: "52",
            color: "blue"
        },
// ������
        {
            position : { lat: 35.3303085, lng: 139.406848 },
            title: "������",
            label_text: "53",
            color: "blue"
        },
// ���{
        {
            position : { lat: 35.5949215, lng: 139.3450528 },
            title: "���{",
            label_text: "54",
            color: "blue"
        },
// �����q
        {
            position : { lat: 35.6556399, lng: 139.3388915 },
            title: "�����q",
            label_text: "55",
            color: "blue"
        },
// �b�{
        {
            position : { lat: 35.6670765, lng: 138.5690546 },
            title: "�b�{",
            label_text: "56",
            color: "blue"
        },
// �x�m
        {
            position : { lat: 35.151486, lng: 138.6511946 },
            title: "�x�m",
            label_text: "57",
            color: "blue"
        },
// �L��
        {
            position : { lat: 34.7629304, lng: 137.381926 },
            title: "�L��",
            label_text: "58",
            color: "blue"
        },
// �C��
        {
            position : { lat: 35.9845957, lng: 137.9978725 },
            title: "�C��",
            label_text: "59",
            color: "blue"
        },
// ���J
        {
            position : { lat: 36.0570347, lng: 138.0453799 },
            title: "���J",
            label_text: "60",
            color: "blue"
        },
// ���K
        {
            position : { lat: 36.1143387, lng: 137.9481023 },
            title: "���K",
            label_text: "61",
            color: "blue"
        },
// ���R
        {
            position : { lat: 35.1429282, lng: 136.9012195 },
            title: "���R",
            label_text: "62",
            color: "blue"
        },
// ���É�
        {
            position : { lat: 35.1709142, lng: 136.8816447 },
            title: "���É�",
            label_text: "63",
            color: "blue"
        },
// ��_
        {
            position : { lat: 35.3669998, lng: 136.6175494 },
            title: "��_",
            label_text: "64",
            color: "blue"
        },
// �Č�
        {
            position : { lat: 35.3145999, lng: 136.2905717 },
            title: "�Č�",
            label_text: "65",
            color: "blue"
        },
// ����
        {
            position : { lat: 35.0228832, lng: 135.9622036 },
            title: "����",
            label_text: "66",
            color: "blue"
        },
// �R��
        {
            position : { lat: 34.992343, lng: 135.8173204 },
            title: "�R��",
            label_text: "67",
            color: "blue"
        },
// �ߍ]����
        {
            position : { lat: 35.5383377, lng: 136.1514616 },
            title: "�ߍ]����",
            label_text: "68",
            color: "blue"
        },
// ����
        {
            position : { lat: 35.3021433, lng: 135.2518621 },
            title: "����",
            label_text: "69",
            color: "blue"
        },
// ���s
        {
            position : { lat: 34.9858294, lng: 135.7589033 },
            title: "���s",
            label_text: "70",
            color: "blue"
        },
// �ؒ�
        {
            position : { lat: 34.7359383, lng: 135.8248179 },
            title: "�ؒ�",
            label_text: "71",
            color: "blue"
        },
// ���o
        {
            position : { lat: 34.6880334, lng: 135.5630922 },
            title: "���o",
            label_text: "72",
            color: "blue"
        },
// �v��
        {
            position : { lat: 34.6224548, lng: 135.5842199 },
            title: "�v��",
            label_text: "73",
            color: "blue"
        },
// ����
        {
            position : { lat: 34.5977198, lng: 135.7025349 },
            title: "����",
            label_text: "74",
            color: "blue"
        },
// �ޗ�
        {
            position : { lat: 34.6809044, lng: 135.8189335 },
            title: "�ޗ�",
            label_text: "75",
            color: "blue"
        },
// ���c
        {
            position : { lat: 34.5163234, lng: 135.7447341 },
            title: "���c",
            label_text: "76",
            color: "blue"
        },
// �a�̎R
        {
            position : { lat: 34.2319356, lng: 135.1911771 },
            title: "�a�̎R",
            label_text: "77",
            color: "blue"
        },
// ������
        {
            position : { lat: 34.3901649, lng: 135.3306787 },
            title: "������",
            label_text: "78",
            color: "blue"
        },
// �P
        {
            position : { lat: 34.5319888, lng: 135.4588616 },
            title: "�P",
            label_text: "79",
            color: "blue"
        },
// �V����
        {
            position : { lat: 34.6473099, lng: 135.5138727 },
            title: "�V����",
            label_text: "80",
            color: "blue"
        },
// ���{
        {
            position : { lat: 34.6541072, lng: 135.4927889 },
            title: "���{",
            label_text: "81",
            color: "blue"
        },
// �����
        {
            position : { lat: 34.68215, lng: 135.4661438 },
            title: "�����",
            label_text: "82",
            color: "blue"
        },
// ���
        {
            position : { lat: 34.7024849, lng: 135.4959506 },
            title: "���",
            label_text: "83",
            color: "blue"
        },
// �V���
        {
            position : { lat: 34.7331669, lng: 135.5002139 },
            title: "�V���",
            label_text: "84",
            color: "blue"
        },
// ����
        {
            position : { lat: 34.6927724, lng: 135.545139 },
            title: "����",
            label_text: "85",
            color: "blue"
        },
// ����
        {
            position : { lat: 34.6965674, lng: 135.5341349 },
            title: "����",
            label_text: "86",
            color: "blue"
        },
// ���
        {
            position : { lat: 34.7318259, lng: 135.4316693 },
            title: "���",
            label_text: "87",
            color: "blue"
        },
// �J��
        {
            position : { lat: 35.0823226, lng: 135.0501144 },
            title: "�J��",
            label_text: "88",
            color: "blue"
        },
// ���Ð�
        {
            position : { lat: 34.7676372, lng: 134.8393645 },
            title: "���Ð�",
            label_text: "89",
            color: "blue"
        },
// �P�H
        {
            position : { lat: 34.8266323, lng: 134.6898735 },
            title: "�P�H",
            label_text: "90",
            color: "blue"
        },
// ����
        {
            position : { lat: 34.8179561, lng: 134.4741181 },
            title: "����",
            label_text: "91",
            color: "blue"
        },
// ����(�R�z�{��)
        {
            position : { lat: 34.8179561, lng: 134.4741181 },
            title: "����(�R�z�{��)",
            label_text: "92",
            color: "blue"
        },
// �����R(�R�z�{��)
        {
            position : { lat: 34.6856481, lng: 133.9881796 },
            title: "�����R(�R�z�{��)",
            label_text: "93",
            color: "blue"
        },
// �����R
        {
            position : { lat: 34.6856481, lng: 133.9881796 },
            title: "�����R",
            label_text: "94",
            color: "blue"
        },
// ���R
        {
            position : { lat: 34.6664023, lng: 133.9186461 },
            title: "���R",
            label_text: "95",
            color: "blue"
        },
// �q�~
        {
            position : { lat: 34.6020202, lng: 133.7657547 },
            title: "�q�~",
            label_text: "96",
            color: "blue"
        },
// ���R
        {
            position : { lat: 34.4892415, lng: 133.3614224 },
            title: "���R",
            label_text: "97",
            color: "blue"
        },
// �O��
        {
            position : { lat: 34.4005593, lng: 133.0831419 },
            title: "�O��",
            label_text: "98",
            color: "blue"
        },
// �O��(����)
        {
            position : { lat: 34.4005593, lng: 133.0831419 },
            title: "�O��(����)",
            label_text: "99",
            color: "blue"
        },
// �C�c�s(����)
        {
            position : { lat: 34.3720353, lng: 132.530533 },
            title: "�C�c�s(����)",
            label_text: "100",
            color: "blue"
        },
// �C�c�s
        {
            position : { lat: 34.3720353, lng: 132.530533 },
            title: "�C�c�s",
            label_text: "101",
            color: "blue"
        },
// ����
        {
            position : { lat: 34.4099757, lng: 132.4505616 },
            title: "����",
            label_text: "102",
            color: "blue"
        },
// �V�R��
        {
            position : { lat: 34.0937855, lng: 131.3963492 },
            title: "�V�R��",
            label_text: "103",
            color: "blue"
        },
// �F��
        {
            position : { lat: 34.0030269, lng: 131.2217245 },
            title: "�F��",
            label_text: "104",
            color: "blue"
        },
// ���\
        {
            position : { lat: 33.9665412, lng: 131.2280182 },
            title: "���\",
            label_text: "105",
            color: "blue"
        },
// ���c
        {
            position : { lat: 33.9606253, lng: 131.1868828 },
            title: "���c",
            label_text: "106",
            color: "blue"
        },
// ����c
        {
            position : { lat: 34.0078127, lng: 131.1855495 },
            title: "����c",
            label_text: "107",
            color: "blue"
        },
// ����
        {
            position : { lat: 33.9505769, lng: 130.9221012 },
            title: "����",
            label_text: "108",
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
                scale: 8, //�~�̃T�C�Y
                strokeColor: m.color, //�g�̐F
                strokeWeight: 1.0 //�g�̓��ߗ�
            },
            title: m.title,
            label: {
                text: m.label_text, //���x������
                color: '#FFFFFF', //�����̐F
                fontSize: '10px' //�����̃T�C�Y
            }
        });
    }
}
