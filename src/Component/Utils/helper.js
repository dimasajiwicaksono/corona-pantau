
export const layout = {
    xs: {span: 24},
    md: {span: 12},
    lg: {span: 8}
}

export function convertDate(timestamp) {
    const hariArray = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", 'Sabtu']
    const bulanArray = ["Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    let date = new Date(timestamp);
    const hari = hariArray[date.getDay()]
    const tanggal = date.getDate()
    const bulan = bulanArray[date.getMonth()]
    const tahun = date.getFullYear()
    // const jam = date.getHours()
    // const menit = date.getMinutes()
    // const detik = date.getSeconds()
    return `${hari}, ${tanggal} ${bulan} ${tahun} ` /*${jam}:${menit}:${detik}*/
}