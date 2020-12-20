async function getData() {
    let url = 'http://localhost/rest-api/restfull-server/api/karyawan?IKO=iko123';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let json = await getData();
    let html = '';

    json.data.forEach(data => {
        // console.log(data.nama);
        let htmlSegment = `
            <div class="card mr-4 mb-4" style="width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">ID : ${data.id}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Nama : ${data.nama}</h6>
                    <br>
                    <button class="card-link btn btn-info" id="set-detail" data-target="#modal-detail" data-toggle="modal" data-id="${data.id}" data-nama="${data.nama}" data-absen="${data.absen}" data-lembur="${data.lembur}" data-coba="${data.target}" data-reward="${data.reward}">Detail</button>
                </div>
            </div>
                        `;
        
        html += htmlSegment;
    });

    let container = document.querySelector('#tampil');
    container.innerHTML = html;
}

renderData();

$(document).ready(function () {
    $(document).on('click', '#set-detail',function () {
        var id_judul = $(this).data('id');
        var id = $(this).data('id');
        var nama = $(this).data('nama');
        var absen = $(this).data('absen');
        var lembur = $(this).data('lembur');
        var target = $(this).data('coba');
        var reward = $(this).data('reward');

        $('#modal-judul').html(id_judul);     
        $('#modal-id').html(id);     
        $('#modal-nama').html(nama);     
        $('#modal-absen').html(absen);     
        $('#modal-lembur').html(lembur);     
        $('#modal-target').html(target);     
        $('#modal-reward').html(reward);   
    });
});

