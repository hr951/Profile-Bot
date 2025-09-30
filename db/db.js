const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
	_id: { type: String }, //ユーザーID
	name: { type: String }, //ユーザーネーム
	content: { type: String }, //メッセ
    msgcount: { type: Number }, //メッセ数
    point: { type: Number }, //所持ポイント
    all_point: { type: Number }, //累計ポイント
    bg_upgrade: { type: Boolean }, //累計ポイント
});

const model = mongoose.model('Messages', msgSchema);

module.exports = model;
